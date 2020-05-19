import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import withStyles from 'isomorphic-style-loader/withStyles'
import * as actions from './store/actions'
import styles from './index.less'

class TimeLine extends PureComponent {

    componentDidMount() {
        const { dataList, getTimeLineList } = this.props
        if (dataList.length === 0) {
            getTimeLineList()
        }
    }

    goDetail(uid) {
        const win = window.open(`${window.location.origin}/detail/${uid}`, '_blank');
        win.focus();
    }

    render() {
        const { dataList } = this.props

        return (
            <div className='timeline'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>XIKUN博客-文章归档</title>
                    <meta name="description" content='XIKUN博客-个人IT技术发表平台,文章归档' />
                </Helmet>
                {dataList.map(item => (
                    <div key={item.ids}>
                        <h2>{item.dates}</h2>
                        <ul className="timebox">
                            {
                                item.list.map(val => (
                                    <li key={val.uid}>
                                        <span>{val.createTime.substring(0, 10)}</span>
                                        <i>
                                            <a onClick={() => this.goDetail(val.uid)}>{val.title}</a>
                                        </i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ archives }) => ({
    dataList: archives.dataList,
})

const mapDispatchToProps = dispatch => {
    return {
        getTimeLineList: () => dispatch(actions.getTimeLineList()),
    }
}

const ExportTimeLine = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TimeLine))

ExportTimeLine.loadData = async store => {
    await store.dispatch(actions.getTimeLineList())
}

export default ExportTimeLine