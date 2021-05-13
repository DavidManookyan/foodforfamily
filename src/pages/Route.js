import React from 'react'
import { Route as ReactRoute } from 'react-router-dom'

const Route = ({
    component,
    path,
    secured,
    Layout,
    exact
}) => {
    return (
        <Layout>
            <ReactRoute
                path={path}
                component={component}
                exact={exact}/>
        </Layout>
    )
}

export default Route
