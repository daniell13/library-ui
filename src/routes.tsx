import React, {ReactNodeArray} from 'react';
import {Route} from 'react-router-dom';
import DemoCommonComponents from './pages/demo-components/components/DemoCommonComponents';

const routes: ReactNodeArray = [
    <Route key="home" path="/" component={DemoCommonComponents} />,
    <Route key="test" path="/test" component={DemoCommonComponents} />,
]

export default routes;
