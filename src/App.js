import React from 'react';
import Header from './components/Header';
import Layout from '@components/Layout';
import { Switch, Route } from 'react-router-dom';
import routes from './pages';

const App = () => {
    console.log(routes)
    return (
        <div>
            <Header />
            <Layout>
                <Switch>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} component={route.page} {...route}/>
                    ))}
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
