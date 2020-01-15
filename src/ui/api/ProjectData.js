import axios from 'axios';

const DATA_URL = '/static/raw/data.json';

let projectData = null;

function getProjectData(){
    return projectData == null ? getDataFromServer() : Promise.resolve(projectData);
}

function getDataFromServer(){
    return axios({
        url: DATA_URL,
        method: 'GET'
    })
    .then(parseResponse);
}

function parseResponse(response){
    let data = {}

    // Add last modifed to data
    data.lastModified = new Date(response.headers['last-modified']);

    // Convert country count to percentage
    let projectCountryPercentage = Object.keys(response.data)
        .map((key) => {
            let totalCount = Object.values(response.data[key]).reduce((sum, count) => sum + count);

            let countriesCount = response.data[key];

            let countriesPercentage = Object.keys(countriesCount)
                .map((country) => {
                    return [country, (countriesCount[country] / totalCount ) * 100]
                });

            return [ key, Object.fromEntries(countriesPercentage) ];
        });
    data.projects = Object.fromEntries(projectCountryPercentage);

    return data;
}

export {
    getProjectData
}
