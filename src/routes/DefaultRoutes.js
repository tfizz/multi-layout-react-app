import React from 'react'
import { Route } from "react-router-dom";
import Layout from '../layouts/default';

function DefaultRoutes({ component: Component, title: title, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            <Layout component={Component} title={title} {...props}></Layout>
        )} />
    )
}

export default DefaultRoutes