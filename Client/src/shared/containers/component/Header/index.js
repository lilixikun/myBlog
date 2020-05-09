import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/withStyles'
import { getActivePath } from '../../utils'
import styles from './index.less'

const tabs = [
    {
        title: '首页',
        link: '/home'
    },
    {
        title: '归档',
        link: '/archives'
    },
    {
        title: '分类',
        link: '/classify'
    },
    {
        title: '关于我',
        link: '/me'
    }
]
class Header extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            activeKey: props.location.pathname
        }
    }

    tabClick(activeKey) {
        this.setState({ activeKey })
    }

    render() {
        const { activeKey } = this.state
        return (
            <nav>
                <div>
                    <div className='na_title'>
                        <span>X</span>
                        <span>I</span>
                        <span>K</span>
                        <span>U</span>
                        <span>N</span>
                        <span>博</span>
                        <span>客</span>
                    </div>
                    {
                        tabs.map(item => (
                            <div key={item.link} onClick={() => this.tabClick(item.link)}>
                                <Link to={item.link} >
                                    <span className={activeKey === item.link ? 'na_activel_link' + ' ' + 'na_link' : 'na_link'}>{item.title}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </nav>
        )
    }
}

export default withStyles(styles)(Header)  