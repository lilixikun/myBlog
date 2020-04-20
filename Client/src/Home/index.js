import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux";
import './index.less'

class Home extends PureComponent {

    render() {
        return (
            <Fragment>
                <div className="content">
                    <aside className='aside-left'>
                        Left
                    </aside>
                    <aside className='aside-right'>
                        {/* <div>
                            <img src="https://pics6.baidu.com/feed/d058ccbf6c81800a0baf2c6fce53b9fc838b47f1.jpeg?token=65fa1a02296996f59441cff18912e4c2" />
                        </div>
                        <div>
                            <img src="https://pics6.baidu.com/feed/d058ccbf6c81800a0baf2c6fce53b9fc838b47f1.jpeg?token=65fa1a02296996f59441cff18912e4c2" />
                        </div> */}

                        <div className="xk-tags">
                            <div className='hot-tas'>热门标签</div>
                            <section className='tag-content'>
                                <div className="tag">
                                    <div className='sort'>前段</div>
                                    <div>10篇文章</div>
                                </div>
                                <div className="tag">

                                </div>
                                <div className="tag">

                                </div>
                                <div className="tag">

                                </div>
                                <div className="tag">

                                </div>
                                <div className="tag">

                                </div>
                                <a className='allTags'>查看全部</a>
                            </section>
                        </div>

                        <div className="xk-tags" style={{ marginTop: 50 }}>
                            <div className='hot-tas'>推荐文章</div>
                            <section className='tag-content'>
                                <div className='hot-article'>
                                    <img src="https://pics6.baidu.com/feed/d058ccbf6c81800a0baf2c6fce53b9fc838b47f1.jpeg?token=65fa1a02296996f59441cff18912e4c2" />
                                    <div>
                                        <p className='title'>CSS3中常见的单位及总结</p>
                                        <p className='time'>2020-03-29</p>
                                    </div>
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