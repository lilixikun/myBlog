import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import withStyles from 'isomorphic-style-loader/withStyles';
import { getRandomColor } from '../utils'
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


    componentDidMount() {
        const { tagList, hotList, blogList } = this.props
        if (tagList.length === 0) {
            this.props.getTagList()
        }
        if (hotList.length === 0) {
            this.props.getHotBlog()
        }
        if (blogList.rows.length === 0) {
            this.props.getBlogList()
        }
    }

    goDetail(uid) {
        this.props.history.push(`/detail/${uid}`)
    }

    render() {
        const { count, rows } = this.props.blogList


        return (
            <Fragment>
                <div className="content">
                    <aside className='aside-left'>
                        {rows.map((item, index) => (
                            <div className='list-item img-wrapper' key={item.uid} onClick={() => this.goDetail(item.uid)}>
                                <LazyLoad height={140}>
                                    <img src={imags[index]} />
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
                                {this.props.hotList.map((item, index) => (
                                    <div className='hot-article' key={item.uid}>
                                        <div className='img-wrapper article-wrapper'>
                                            <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                        </div>                                    <div>
                                            <p className='title'>{item.title}</p>
                                            <p className='createTime'>{item.create_time}</p>
                                        </div>
                                        <div className="sort">{index + 1}</div>
                                    </div>
                                ))}
                                <div className='sort-content'>
                                    <span>4</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>5</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>6</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>7</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>8</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>9</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
                                <div className='sort-content'>
                                    <span>10</span>
                                    <p className='title'>非官方个风格非官方</p>
                                </div>
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
        getBlogList: uid => dispatch(actions.getBlogList(uid)),
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