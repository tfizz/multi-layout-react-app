import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import Projects from './projects';
import NewProject from './projects/Add';

function Index() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route exact  path={`${match.path}`}>
                <Dashboard />
            </Route>
            <Route exact path={`${match.path}/projects`}>
                <Projects />
            </Route>
            <Route path={`${match.path}/projects/new`}>
                <NewProject />
            </Route>
        </Switch>
    )
}

export default Index
