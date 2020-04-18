import React from 'react'
import { Layout } from "antd"
// import { renderRoutes } from 'react-router-config'
import renderRoutes from '../../router'
import { connect } from 'react-redux';

const { Content } = Layout;

function Index(props) {
    return (
        <Content>
            <div className="site-layout-background">
                {renderRoutes(props.route.routes, props.isLogin)}
            </div>
        </Content>
    )
}

const mapStateToProps = ({ user }) => ({
    isLogin: user.isLogin
})
export default connect(mapStateToProps)(React.memo(Index))