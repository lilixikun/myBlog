import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'

import Card from '../component/Card'

import * as actions from '../Home/store/actions'
import styles from './index.less'

class TagList extends PureComponent {

    render() {
        const { count, rows } = this.props.blogList
        const { detail } = this.props

        return (
            <div className='tag-wrapper'>
                <div className='tag-view'>
                    <img src={`http://localhost:7001/file_type_${detail.img}.svg`} />
                    <p>{detail.tagName} {count} 篇文章 </p>
                </div>
                <div className='tag-content'>
                    <Card rows={rows} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ home }) => ({
    blogList: home.blogList,
    detail: home.detail
})

const mapDispatchToProps = dispatch => {
    return {
        getBlogList: () => dispatch(actions.getBlogListByTagId()),
    }
}

const ExportTag = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TagList))

ExportTag.loadData = async (store, params, query) => {
    if (Object.keys(query)) {
        await store.dispatch(actions.getBlogListByTagId(query))
        await store.dispatch(actions.getTagDetail(query.tagUid))
    }
}
export default ExportTag