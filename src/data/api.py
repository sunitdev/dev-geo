import os

from typing import Iterator

import requests

from data.models import Repository, APIRepostiory, APIContributor

class GithubApi:
    '''
    Wrapper to call github api
    '''

    # URL's
    __URL_API_REPOSITORY_INFO = 'https://api.github.com/repos/{owner}/{name}'
    __URL_API_REPOSITORY_CONTRIBUTORS = 'https://api.github.com/repos/{owner}/{name}/contributors'
    __URL_API_USER_INFO = 'https://api.github.com/users/{login}'

    @classmethod
    def get_repository_info(cls, repo: Repository) -> APIRepostiory:
        '''
        API call to repository
        '''

        # Create url
        url = cls.__URL_API_REPOSITORY_INFO.format(owner=repo.owner, name=repo.url_name)

        # Headers
        headers: dict = {
            'Authorization': f"token {os.environ['DEV_GEO_GITHUB_TOKEN']}"
        }

        # Make request
        data = requests.get(url, headers=headers).json()

        # Parse response
        repo = APIRepostiory(
                name=data['name'],
                html_url=data['html_url'],
                owner_login=data['owner']['login'])

        return repo

    @classmethod
    def get_contributors(cls, repo: Repository) -> Iterator[APIContributor]:
        '''
        Return list of contributors for a repository
        '''
        # Page count
        page: int = 1

        # Create url
        url = cls.__URL_API_REPOSITORY_CONTRIBUTORS.format(owner=repo.owner, name=repo.url_name)

        # Return list of contributors
        while True:
            # Query params
            params: dict = {
                'page': page
            }

            # Headers
            headers: dict = {
                'Authorization': f"token {os.environ['DEV_GEO_GITHUB_TOKEN']}"
            }

            # Make request
            contributors_response = requests.get(url, params=params, headers=headers).json()

            # Break if done
            if len(contributors_response) == 0:
                break

            # Parse and return contributor
            for item in contributors_response:
                # Check if type is user then yeild contributor
                if item['type'].lower() == 'user':
                    yield cls.get_contributor_info(item['login'])

            # Increment page count
            page += 1

    @classmethod
    def get_contributor_info(cls, login: str) -> APIContributor:
        '''
        Given a login name return contributor info
        '''

        # Create url
        url = cls.__URL_API_USER_INFO.format(login=login)

        # Headers
        headers: dict = {
            'Authorization': f"token {os.environ['DEV_GEO_GITHUB_TOKEN']}"
        }

        # Make response
        data = requests.get(url, headers=headers).json()

        # Parse response
        return APIContributor(
                login=data['login'],
                name=data['name'],
                location=data['location'])

