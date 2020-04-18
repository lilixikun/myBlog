import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

/**
 * 
 * @param {*} routes 
 * @param {*} authed //当前是否登录
 * @param {*} authPath //默认未登录返回的页面
 * @param {*} extraProps 
 * @param {*} switchProps 
 */
const renderRoutes = (routes, authed, authPath = '/user/login', extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    if (!route.requiresAuth || authed || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />
                    }  
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
            />
        ))}
    </Switch>
) : null

export default renderRoutes