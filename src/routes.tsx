/* tslint:disable:no-use-before-declare */
import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
import JavaScript from './Containers/JavaScriptContainer';
import NotFound from './Containers/NotFoundContainer';
import Editor from './Containers/EditorContainer';

export default (
    <Switch>
        <Route exact={true} path="/" component={JavaScript} />
        <Route exact={true} path="/JavaScript" component={JavaScript} />
        <Route exact={true} path="/Editor" component={Editor} />
        <Route exact={true} path="/NotFound" component={NotFound} />
        <Redirect from="*" to="/NotFound" />
    </Switch>
);