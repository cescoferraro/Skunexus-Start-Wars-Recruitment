import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const Router = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default Router;
