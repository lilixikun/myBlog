import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {

    render() {
        return (
            <Fragment>
                <a>首页</a>
                <br />
                <a to="/footer">尾部</a>
            </Fragment>
        )
    }
}

export default Header