from collections.abc import Iterable

import pytest

from .context import *

from data.api import GithubApi
from data.models import APIRepostiory, Repository, APIContributor

class TestGithubApi:
    '''
    Test cases from `data.models.GithubApi` class
    '''

    def test_repository_info_request(self):
        '''
        GithubApi.get_repository_info() should return APIRepostiory with attributes set
        '''
        repo = Repository(
                name='Project site',
                url='https://github.com/sunitdeshpande/DevGeo',
                icon='https://example.com/someicon.png',
                description='Test Repo')

        api_repo = GithubApi.get_repository_info(repo)

        assert api_repo.name == 'DevGeo'
        assert api_repo.html_url == 'https://github.com/sunitdeshpande/DevGeo'
        assert api_repo.owner_login == 'sunitdeshpande'

    def test_respository_contributor_request(self):
        '''
        GithubApi.get_contributors() should return
        '''
        repo = Repository(
                name='Personal site',
                url='https://github.com/sunitdeshpande/sunitdeshpande.github.io',
                icon="https://example.com/someicon.png",
                description="Test Repo")

        contributors = GithubApi.get_contributors(repo)

        # Must return a iteratable
        assert isinstance(contributors, Iterable)

        # Must return a user
        contributor = next(contributors)
        assert isinstance(contributor, APIContributor)
        assert contributor.login == 'sunitdeshpande'
        assert contributor.name == 'SunitDeshpande'
        assert contributor.location.lower() == 'dublin, ireland'

        # Must stop after last user
        with pytest.raises(StopIteration):
            next(contributors)
