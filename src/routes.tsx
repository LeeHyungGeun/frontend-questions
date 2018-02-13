/* tslint:disable:no-use-before-declare */
import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
import JavaScript from './containers/JavaScriptContainer';
import NotFound from './containers/NotFoundContainer';

export default (
    <Switch>
        <Route exact={true} path="/JavaScript" component={JavaScript} />
        <Route exact={true} path="/NotFound" component={NotFound} />
        <Redirect from="*" to="/NotFound" />
    </Switch>
);