import React from 'react';
import Header from './components/Header';
import Layout from '@components/Layout';
import Chat from "./pages/Chat";

const App = () => {
    return (
        <div>
            <Header />
            <Layout>
                <Chat />
            </Layout>
        </div>
    );
};

export default App;
