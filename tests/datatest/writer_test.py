import json

from .context import *

from data.config import Config
from data.writer import DataWriter
from data.api import GithubApi

class TestDataWriter:
    '''
    Test cases for `data.writer.DataWriter`
    '''

    # Output filepath

    # Test data files
    _TEST_REPO_CONFIG_PATH = os.path.join(TEST_RAW_DIR, 'data', 'config.json')
    _TEST_REPO_DATA_PATH = os.path.join(TEST_RAW_DIR, 'data', 'test_repo_data.json')

    _OUT_DATA_FILE_PATH = os.path.join(BASE_DIR, 'dist', 'static', 'raw', 'data.json')

    def test_contructor(self):
        '''
        DataWriter class must accpet config and api as the parameter in constructor
        '''
        config = Config()

        writer = DataWriter(config=config)

        assert writer.config is config

    def test_data_file(self):
        '''
        DataWriter class must generate a data.json file in dist/static/raw/ folder.
        With appropriate data
        '''
        # Create test config
        test_config = Config(config_path=self._TEST_REPO_CONFIG_PATH)

        # Create data file
        writer = DataWriter(config=test_config)
        writer.write()

        # Content of both the generated file and test file should be same.
        with open(self._OUT_DATA_FILE_PATH, 'r') as file:
            outdata = json.load(file)

        with open(self._TEST_REPO_DATA_PATH, 'r') as file:
            testdata = json.load(file)

        assert json.dumps(outdata) == json.dumps(testdata)
