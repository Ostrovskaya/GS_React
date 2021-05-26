import React from 'react';
import loadable from '@loadable/component';

const Page = loadable(props => import(`./${props.page}`))

const routes = [  
    {
        path: '/chat/:id',
        page: 'Chat',
    },
    {
        path: '/',
        page: 'Home',
    },
]

const finalRoutes = routes.map((route) => ({
    ...route,
    exact: !!route.exact,
    page: () => <Page page={route.page} />,
}));

export default finalRoutes;