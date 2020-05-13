import React, { PureComponent } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles';
import DiamonLoading from 'react-loadingg/lib/CircleLoading';
import { connect } from 'react-redux'
import marked from 'marked';
import highlight from 'highlight.js';
import MarkdownNavbar from 'markdown-navbar';
import * as actions from './store/actions'

import author from '../assets/author.png'
import look from '../assets/look.png'
import time from '../assets/time.png'
import styles from './detail.less'


marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight(code) {
        return highlight.highlightAuto(code).value;
    },
});


class Index extends PureComponent {

    constructor(props) {
        super(props)
        this.refHerf = React.createRef()
        this.state = {}
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
            if (this.refHerf.current) {

                const classList = this.refHerf.current.classList
                if (scroll_top > 500 && classList.contains('navigationFixed')) {
                    return
                }
                else if (scroll_top > 500 && !classList.contains('navigationFixed')) {
                    classList.add('navigationFixed')
                }
                else {
                    classList.remove('navigationFixed')
                }
            }
        })
    }

    componentWillUnmount() {
        //window.removeEventListener('scroll')
    }

    render() {
        const { detail } = this.props

        return (
            <>
                {!detail.uid ? <DiamonLoading size="large" /> : <div style={{ width: '100%' }}>
                    <div className="detail-wrapper">
                        <div className='detail-content'>
                            <h1 className="detail-title">{detail.title}</h1>
                            <div className='item-footer'>
                                <img src={author} /> <span>{detail.author}</span>
                                <img src={time} /> <span>{detail.createTime}</span>
                                <img src={look} /> <span>{detail.clickCount}</span>
                                <span>全文字数  {detail.content.length}</span>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <img src={detail.fileUid} />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: detail.content && marked(detail.content) }}></div>
                        </div>

                        <div className='detail-sidebar'>
                            <div className='author-wrapper'>
                                <p className='tip'>关于作者</p>
                                <div className='author-content'>
                                    <img src="https://himg.bdimg.com/sys/portrait/item/pp.1.2bb13375.LdU9iYS3Vf2-0sAKoXUHAg?_t=1589019665354" />
                                    <div>
                                        <p className='tip'>席坤</p>
                                        <p className='description'>前端开发工程师</p>
                                        <p className='description'>文章 10 | 阅读 5000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation" ref={this.refHerf}>
                                <MarkdownNavbar
                                    className="article-menu toc-fixed"
                                    source={detail.content}
                                />
                            </div>
                        </div>
                    </div>
                </div>}
            </>
        )
    }
}

const mapStateToProps = ({ home }) => ({
    detail: home.detail
})

const ExportDetail = connect(mapStateToProps, null)(withStyles(styles)(Index))

ExportDetail.loadData = async (store, params) => {
    if (params.uid) {
        await store.dispatch(actions.getBlogDetail(params.uid))
    }
}
export default ExportDetail