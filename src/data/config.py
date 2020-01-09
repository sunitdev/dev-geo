import os
import json

from models import Repository

class Config:
    '''
    Utility class to read config file
    '''

    _BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))

    # Default parameters
    _DEFAULT_CONFIG_PATH = os.path.join(_BASE_DIR, 'config.json')

    def __init__(self,
            config_path: str=_DEFAULT_CONFIG_PATH):

        self.config_path = config_path

        # Read config file
        with open(self.config_path, 'r') as file:
            self.config = json.load(file)

    @property
    def repositories(self):
        '''
        Return list of repositories objects from config
        '''
        return [ Repository(**item) for item in self.config['repositories'] ]
