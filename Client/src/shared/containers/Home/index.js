import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import withStyles from 'isomorphic-style-loader/withStyles';
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from 'react-lazyload';
import * as actions from './store/actions'
import author from '../assets/author.svg'
import look from '../assets/look.svg'
import time from '../assets/time.svg'
import styles from './index.less'


const tags = ["前段", "Sql", "Vue", "JAVA", "测试", "Python"]
const imags = ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3941434829,1642547318&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4110196045,3829597861&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2202851728,786325929&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4219346243,168775371&fm=11&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1135012456,1998209284&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1619425792,2885514976&fm=26&gp=0.jpg'
]
class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            hasMore: true
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

    fetchMoreData() {
        // console.log(this.props.blogList.count);
        if (this.props.blogList.rows.length >= this.props.blogList.count) {
            this.setState({ hasMore: false });
            return;
        }
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
                            //next={() => this.fetchMoreData()}
                            hasMore={this.state.hasMore}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>我可是有底线的</b>
                                </p>
                            }
                        >
                            {rows.map((item, index) => (
                                <div className='list-item img-wrapper' key={item.uid} onClick={() => this.goDetail(item.uid)}>
                                    <LazyLoad height={140}>
                                        <img src={item.fileUid} />
                                    </LazyLoad>
                                    <div className='item-wrapper'>
                                        <p className='main-title'>{item.title}</p>
                                        <p className='sub-title'>{item.summary}</p>
                                        <div className='item-footer'>
                                            <img src={author} /> <span>{item.author}</span>
                                            <img src={time} /> <span>{item.createTime}</span>
                                            <img src={look} /> <span>{item.clickCount}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </InfiniteScroll>


                    </aside>
                    <aside className='aside-right'>
                        <div className="xk-tags">
                            <div className='hot-tas'>热门标签</div>
                            <section className='tag-content'>
                                {this.props.tagList.map((item) => (
                                    <div className="tag" key={item.uid}>{item.tag_name}</div>
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