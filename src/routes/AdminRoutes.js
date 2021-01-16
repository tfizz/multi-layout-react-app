import React from 'react'
import { Route } from "react-router-dom";
import Layout from '../layouts/admin';

function AdminRoutes({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={(props) => (
            <Layout component={Component} {...props} />
        )} />
    )
}

export default AdminRoutes
