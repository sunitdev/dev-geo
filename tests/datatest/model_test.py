from .context import *

from data.models import Repository, APIContributor

class TestRepositoryModel:
    '''
    Test cases from `data.models.Repository` class
    '''

    def test_repository_constructor(self):
        '''
        Repository class must accept name and url of the repo and initalize some properties
        '''
        repo = Repository(name='Test Repo',
                url='https://github.com/sunitdeshpande/DevGeo',
                icon='https://example.com/someicon.png',
                description='Test Repo')

        assert repo.name == 'Test Repo'
        assert repo.url == 'https://github.com/sunitdeshpande/DevGeo'
        assert repo.icon == 'https://example.com/someicon.png'
        assert repo.description = 'Test Repo'
        assert repo.url_name == 'DevGeo'
        assert repo.owner == 'sunitdeshpande'


class TestAPIContributorModel:
    '''
    Test cases for `data.models.APIContributor` class
    '''

    def test_api_contributor_constructor(self):
        '''
        APIContributor class must accept only login, name and location as parameter
        '''
        contributor = APIContributor(login='sunitdeshpande',
                                     name='SunitDeshpande',
                                     location='Dublin')

        assert contributor.login == 'sunitdeshpande'
        assert contributor.name == 'SunitDeshpande'
        assert contributor.location == 'Dublin'
