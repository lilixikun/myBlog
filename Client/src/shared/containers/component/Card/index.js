import React, { PureComponent, Fragment } from 'react'
import LazyLoad from 'react-lazyload';
import classNames from 'classnames'
import withStyles from 'isomorphic-style-loader/withStyles';

import author from '../../assets/author.png'
import look from '../../assets/look.png'
import time from '../../assets/time.png'
import styles from './index.less'

class Card extends PureComponent {

    goDetail(uid) {
        const win = window.open(`${window.location.origin}/detail/${uid}`, '_blank');
        win.focus();
    }

    render() {

        const { rows } = this.props

        return (
            <Fragment>
                {rows.map((item, index) => (
                    <div className='list-item img-wrapper' key={item.uid} onClick={() => this.goDetail(item.uid)}>
                        <LazyLoad height={140} styles={{ width: 220 }}>
                            <img src={item.fileUid} />
                        </LazyLoad>
                        <div className='item-wrapper'>
                            <p className={classNames('main-title', index > 5 ? 'after-none' : '')} >{item.title}</p>
                            <p className='sub-title'>{item.summary}</p>
                            <div className='item-footer'>
                                <img src={author} /> <span>{item.author}</span>
                                <img src={time} /> <span>{item.createTime.substring(0, 10)}</span>
                                <img src={look} /> <span>{item.clickCount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}

export default withStyles(styles)(Card)