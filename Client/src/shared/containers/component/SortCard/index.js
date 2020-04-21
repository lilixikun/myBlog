import React, { PureComponent } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './index.less'

class Card extends PureComponent {
    render() {
        return (
            <>
                {/* {tags.map((item, index) => (
                            <div className='img-wrapper card animated bounceInDown' key={index}>
                                <img src="https://img-bss.csdn.net/1587377847536.png" />
                                <div className='card-content'>
                                    <p className='title'>挂靠费冠福股份给发个发广告</p>
                                    <div className='card-footer'>
                                        <span className="createTime">2019-20-11</span>
                                        <span className="createTime">前段</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='img-wrapper card animated fadeInUp'>
                            <img src="https://img-bss.csdn.net/1587377847536.png" />
                            <div className='card-content'>
                                <p className='title'>挂靠费冠福股份给发个发广告</p>
                                <div className='card-footer'>
                                    <span className="createTime">2019-20-11</span>
                                    <span className="createTime">前段</span>
                                </div>
                            </div>
                        </div> */}
            </>
        )
    }
}

export default withStyles(styles)(Card)