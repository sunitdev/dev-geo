import os
import json

from typing import Iterator

from pycountry import countries

from data.api import GithubApi
from data.config import Config
from data.models import APIContributor


class DataWriter:
    '''
    Module to create data needed for frontend.
    Format of the data:

    ```json
        {
            '<project_name>': {
                '<country_code>': '<developer_count>'
            }
        }
    ```
    '''

    # Path's
    _BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
    _OUT_DATA_FILE_PATH = os.path.join(_BASE_DIR, 'dist', 'static', 'raw', 'data.json')


    def __init__(self, config: Config):
        '''
        Accepts config instance as parameter
        '''
        self.config = config

    def write(self, path: str = _OUT_DATA_FILE_PATH):
        '''
        Call github api and write data in format required for frontend
        '''
        # Create output directory if not exists
        if not os.path.exists(os.path.dirname(path)):
            os.makedirs(os.path.dirname(path))

        output_data = {}
        # For each repo
        for repo in self.config.repositories:
            print(f'Generating data for {repo.name} ...')
            contributors = GithubApi.get_contributors(repo)
            output_data.update({ repo.name: self.__format_contributors(contributors) })

        # Write file
        with open(path, 'w') as file:
            json.dump(output_data, file)


    def __format_contributors(self, contributors: Iterator[APIContributor]) -> dict:
        '''
        Convert contributors iterator to country count map
        '''
        contributor_map = {}

        # Convert list to location map
        for contributor in contributors:
            if contributor.location:
                try:
                    # Take the last part of the location
                    user_country = contributor.location.split(',')[-1].strip()
                    # Do a fuzzy seach and take alpha 3 code
                    country = countries.search_fuzzy(user_country)[0].alpha_3
                    # Update count
                    contributor_map.update({
                        country: contributor_map.get(country, 0) + 1
                    })
                except LookupError:
                    continue

        # return formated contributors
        return contributor_map
