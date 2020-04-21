import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import withStyles from 'isomorphic-style-loader/withStyles';
import { getRandomColor } from '../utils'
import LazyLoad from 'react-lazyload';
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

    render() {

        return (
            <Fragment>
                <div className="content">
                    <aside className='aside-left'>
                        {tags.map((item, index) => (
                            <div className='list-item img-wrapper' key={index}>
                                <LazyLoad height={140}>
                                    <img src={imags[index]} />
                                </LazyLoad>
                                <div className='item-wrapper'>
                                    <p className='main-title'>热门标签热门标签热门标签</p>
                                    <p className='sub-title'>热门标签热门标签热门标签热门标签热门标签热门标签热门标签热门标签</p>
                                    <div className='item-footer'>
                                        <img src={author} /> <span>凹凸曼</span>
                                        <img src={time} /> <span>2020-11-20</span>
                                        <img src={look} /> <span>252</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </aside>
                    <aside className='aside-right'>
                        <div className="xk-tags">
                            <div className='hot-tas'>热门标签</div>
                            <section className='tag-content'>
                                {tags.map((item, index) => (
                                    <div className="tag" style={{ background: getRandomColor() }} key={index}>{item}</div>
                                ))}
                            </section>
                        </div>

                        <div className="xk-tags" style={{ marginTop: 20 }}>
                            <div className='hot-tas'>推荐文章</div>
                            <section className='tag-content'>
                                <div className='hot-article'>
                                    <div className='img-wrapper article-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='createTime'>2020-03-29</p>
                                    </div>
                                    <div className="sort">1</div>
                                </div>
                                <div className='hot-article'>
                                    <div className='img-wrapper article-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='createTime'>2020-03-29</p>
                                    </div>
                                    <div className="sort">2</div>
                                </div>
                                <div className='hot-article'>
                                    <div className='img-wrapper article-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>
                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='createTime'>2020-03-29</p>
                                    </div>
                                    <div className="sort">3</div>
                                </div>
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

const mapStateToProps = (state) => ({

})

const ExportHome = connect(mapStateToProps, null)(withStyles(styles)(Home))

export default ExportHome