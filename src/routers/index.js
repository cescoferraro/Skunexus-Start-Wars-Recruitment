import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App';
import Films from '../components/Films';
import Residents from '../components/Residents';
import NotFoundPage from '../components/NotFoundPage';
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const Router = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/films' component={Films}/>
                    <Route exact path='/residents' component={Residents}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default Router;
