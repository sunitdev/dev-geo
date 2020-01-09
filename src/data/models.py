from dataclasses import dataclass

@dataclass
class Repository:
    '''
    Model to store repository information
    '''
    name: str
    url: str

    @property
    def url_name(self):
        '''
        Return repository name
        '''
        return self.url.split('/')[-1]

    @property
    def owner(self):
        '''
        Return owner from url
        '''
        return self.url.split('/')[-2]

@dataclass
class APIRepostiory:
    '''
    Model to store api repository response
    '''
    name: str
    html_url: str
    owner_login: str


@dataclass
class APIContributor:
    '''
    Model to store api contributor reponse
    '''
    login: str
    name: str
    location: str
