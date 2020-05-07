import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import * as actions from './store/actions'
import styles from './index.less'

class TimeLine extends PureComponent {

    componentDidMount() {
        if (this.props.dataList === 0) {
            this.props.getTimeLineList()
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
                <img src='http://localhost:7001/file_type_vue.svg' style={{ width: 57 }} />
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