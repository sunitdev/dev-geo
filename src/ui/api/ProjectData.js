import axios from 'axios';

const DATA_URL = 'https://sunitdev.github.io/dev-geo/static/raw/data.json';

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
            const projectData = response.data[key];

            const totalDeveloperCount = Object.values(projectData.data).reduce((sum, count) => sum + count);

            const countriesPercentage = Object.keys(projectData.data)
                .map((country) => {
                    return [country, (projectData.data[country] / totalDeveloperCount ) * 100]
                });

            return [ key, {
                ...projectData,
                data: Object.fromEntries(countriesPercentage)
            }];
        });
    data.projects = Object.fromEntries(projectCountryPercentage);


    return data;
}

export {
    getProjectData
}
