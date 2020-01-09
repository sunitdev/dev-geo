from .context import *

from data.models import Repository

class TestRepositoryModel:
    '''
    Test cases from `data.models.Repository` class
    '''

    def test_repository_constructor(self):
        '''
        Repository class must accept name and url of the repo and initalize some properties
        '''
        repo = Repository(name='Test Repo', url='https://github.com/sunitdeshpande/DevGeo')

        assert repo.name == 'Test Repo'
        assert repo.url == 'https://github.com/sunitdeshpande/DevGeo'
        assert repo.owner == 'sunitdeshpande'
        assert repo.url_name == 'DevGeo'

