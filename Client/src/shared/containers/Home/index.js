import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import withStyles from 'isomorphic-style-loader/withStyles';
import InfiniteScroll from "react-infinite-scroll-component";

import Card from '../component/Card'

import * as actions from './store/actions'
import styles from './index.less'

class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }
    componentDidMount() {
        const { tagList, hotList, blogList } = this.props
        const { getTagList, getHotBlog, getBlogList } = this.props
        if (tagList.length === 0) {
            getTagList()
        }
        if (hotList.length === 0) {
            getHotBlog()
        }
        if (blogList.rows.length === 0) {
            getBlogList()
        }
    }

    goDetail(uid) {
        const win = window.open(`${window.location.origin}/detail/${uid}`, '_blank');
        win.focus();
    }

    goTag(uid) {
        const win = window.open(`${window.location.origin}/tag?tagUid=${uid}`, '_blank');
        win.focus();
    }

    fetchMoreData() {
        const page = this.state.page + 1
        this.setState({
            page,
        })
        this.props.getBlogList({
            page,
            pageSize: 10
        })
    };

    render() {
        const { count, rows } = this.props.blogList

        return (
            <Fragment>
                <div className="content">
                    <aside className='aside-left'>
                        <InfiniteScroll
                            dataLength={rows.length}
                            next={() => this.fetchMoreData()}
                            hasMore={rows.length < count}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>我可是有底线的</b>
                                </p>
                            }
                        >
                            <Card rows={rows} />
                        </InfiniteScroll>


                    </aside>
                    <aside className='aside-right'>
                        <div className="xk-tags">
                            <div className='hot-tas'>热门标签</div>
                            <section className='tag-content'>
                                {this.props.tagList.map((item) => (
                                    <div className="tag" key={item.uid} onClick={() => this.goTag(item.uid)}>{item.tag_name}</div>
                                ))}
                            </section>
                        </div>

                        <div className="xk-tags" style={{ marginTop: 20 }}>
                            <div className='hot-tas'>推荐文章</div>
                            <section className='tag-content'>
                                {this.props.hotList.map((item, index) => {
                                    if (index <= 2) {
                                        return <div className='hot-article' key={item.uid} onClick={() => this.goDetail(item.uid)}>
                                            <div className='img-wrapper article-wrapper'>
                                                <img src={item.fileUid} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <span className='title'>{item.title}</span>
                                                <p className='createTime'>{item.create_time}</p>
                                            </div>
                                            <div className="sort">{index + 1}</div>
                                        </div>
                                    } else {
                                        return (
                                            <div className='sort-content' key={item.uid} onClick={() => this.goDetail(item.uid)}>
                                                <span>{index + 1}</span>
                                                <p className='title'>{item.title}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </section>
                        </div>
                    </aside>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ home }) => ({
    blogList: home.blogList,
    tagList: home.tagList,
    hotList: home.hotList
})

const mapDispatchToProps = dispatch => {
    return {
        getBlogList: params => dispatch(actions.getBlogList(params)),
        getHotBlog: uid => dispatch(actions.getHotBlog()),
        getTagList: uid => dispatch(actions.getTagList()),
    }
}

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))

ExportHome.loadData = async store => {
    await store.dispatch(actions.getBlogList())
    await store.dispatch(actions.getHotBlog())
    await store.dispatch(actions.getTagList())
}

export default ExportHome