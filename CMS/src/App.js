import React from 'react'
import BaseLayout from "./baseLayout.js"
import { connect } from 'react-redux'
import renderRoutes from './router'

const App = (props) => (
  <BaseLayout {...props}>
    {renderRoutes(props.route.routes, props.isLogin)}
  </BaseLayout>
)

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin
})

export default connect(mapStateToProps)(App)