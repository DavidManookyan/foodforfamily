import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route as ReactRoute,
} from 'react-router-dom'
import NotFound from './NotFound'
import routes from './configs'
import Route from './Route'

const Routes = () => (
    <Router>
        <Switch>
            {
                routes.map(({
                    Component,
                    path,
                    secured,
                    Layout,
                }) => (
                    <Route
                        exact
                        key={path}
                        secured={secured}
                        path={path}
                        Layout={Layout}
                        component={Component}/>
                ))
            }
            <ReactRoute>
                <NotFound/>
            </ReactRoute>
        </Switch>
    </Router>
)

export default Routes
