from dataclasses import dataclass

@dataclass
class Repository:
    '''
    Model to store repository information
    '''
    name: str
    url: str

    @property
    def owner(self):
        '''
        Return owner of the repo
        '''
        return self.url.split('/')[-2]

    @property
    def url_name(self):
        '''
        Return repository name
        '''
        return self.url.split('/')[-1]
