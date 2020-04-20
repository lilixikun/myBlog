import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.css'

const tabs = [
    {
        title: '首页',
        link: '/home'
    },
    {
        title: '归档',
        link: '/home1'
    },
    {
        title: '杂谈',
        link: '/home2'
    },
    {
        title: '关于我',
        link: '/home3'
    }
]
class Header extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            activeKey: '/home'
        }
    }

    tabClick(activeKey) {
        this.setState({ activeKey })

    }
    render() {
        const { activeKey } = this.state
        return (
            <nav>
                <div className={styles.na_title}>
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
                                <span className={activeKey === item.link ? styles.na_activel_link + ' ' + styles.na_link : styles.na_link}>{item.title}</span>
                            </Link>
                        </div>
                    ))
                }
            </nav>
        )
    }
}

export default Header