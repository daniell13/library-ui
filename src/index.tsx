import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './app/App';
import routes from './routes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App>
            <Router>
                <Switch>
                    {routes}
                </Switch>
            </Router>
        </App>
    </React.StrictMode>,
    document.getElementById('root')
);
