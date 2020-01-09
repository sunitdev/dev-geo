import os

from .context import *

from data.config import Config
from data.models import Repository

class TestConfig:
    '''
    Test cases for `data.config.Config` class
    '''

    TEST_REPO_CONFI_PATH = os.path.join(TEST_RAW_DIR, 'data','config','config.json')

    def test_default_parameters(self):
        '''
        Config class must initalize default parmeters
        '''

        config = Config()

        # Default config location
        assert config.config_path == os.path.join(BASE_DIR, 'config.json')


    def test_config_path_parameter(self):
        '''
        Config class must accept a alternative config path as parameter
        '''
        config = self.__get_test_config()

        assert config.config_path == self.TEST_REPO_CONFI_PATH


    def test_repository_property(self):
        '''
        Config class must have a repositories property which return a list of repositories
        '''
        config = self.__get_test_config()

        # repositories property must be a list
        assert isinstance(config.repositories, list)
        assert len(config.repositories) == 1

        # List must contain instance of Repository dataclass
        repo = config.repositories[0]
        assert isinstance(repo, Repository)
        assert repo.name == 'Project Site'
        assert repo.url == 'https://github.com/sunitdeshpande/DevGeo'
        assert repo.url_name == 'DevGeo'
        assert repo.owner == 'sunitdeshpande'


    def __get_test_config(self):
        '''
        Return config object with test config path
        '''
        return Config(config_path=self.TEST_REPO_CONFI_PATH)
