import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import { getRandomColor } from '../utils'
import './index.less'


const tags = ["前段", "Sql", "Vue", "JAVA", "测试", "Python"]

class Home extends PureComponent {

    render() {

        return (
            <Fragment>
                <div className="content">
                    <aside className='aside-left'>
                        Left
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
                                    <div className='img-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='time'>2020-03-29</p>
                                    </div>
                                    <div className="sort">1</div>
                                </div>
                                <div className='hot-article'>
                                    <div className='img-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='time'>2020-03-29</p>
                                    </div>
                                    <div className="sort">2</div>
                                </div>
                                <div className='hot-article'>
                                    <div className='img-wrapper'>
                                        <img src="https://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1587982384&t=da2294a846663c27e8b3b0bd00cf6405" />
                                    </div>
                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='time'>2020-03-29</p>
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

export default connect(mapStateToProps, null)(Home)