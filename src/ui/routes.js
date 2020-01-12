import HomePage from '@/components/pages/HomePage.vue';
import ProjectPage from '@/components/pages/ProjectPage.vue';

const ROUTE_HOME = '/';
const ROUTE_PROJECTS = '/projects';

const routes = [
    {
        path: ROUTE_HOME,
        component: HomePage
    },
    {
        path: ROUTE_PROJECTS,
        component: ProjectPage
    },
    {
        path: '*',
        redirect: ROUTE_HOME
    }
];

export {
    routes,
    ROUTE_HOME,
    ROUTE_PROJECTS
}
