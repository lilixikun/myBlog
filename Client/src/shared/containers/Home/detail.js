import React, { PureComponent } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles';
import DiamonLoading from 'react-loadingg/lib/CircleLoading';
import { connect } from 'react-redux'
import marked from 'marked';
import highlight from 'highlight.js';
import MarkdownNavbar from 'markdown-navbar';
import * as actions from './store/actions'
import 'markdown-navbar/dist/navbar.css';

import author from '../assets/author.svg'
import look from '../assets/look.svg'
import time from '../assets/time.svg'
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


// const tocify = new Tocify();
// const renderer = new marked.Renderer();
// renderer.heading = function(text, level, raw) {
//   const anchor = tocify.add(text, level);
//   return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
// };
// marked.setOptions({ renderer });

class Index extends PureComponent {

    constructor(props) {
        super(props)
        this.refHerf = React.createRef()
        this.state = {}
    }

    componentDidMount() {
        const { uid } = this.props.match.params
        if (!!uid) {
            this.props.getDetail(uid)
        }

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
        window.removeEventListener('scroll')
    }

    render() {
        const { detail } = this.props

        return (
            <>
                {!detail.uid ? <DiamonLoading size="large" /> : <div>
                    <div className="detail-wrapper">
                        <div className='detail-content'>
                            <h1 style={{ color: '#181C20', marginBottom: 20 }}>{detail.title}</h1>
                            <div className='item-footer'>
                                <img src={author} /> <span>{detail.author}</span>
                                <img src={time} /> <span>{detail.createTime}</span>
                                <img src={look} /> <span>{detail.clickCount}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: detail.content && marked(detail.content) }}></div>
                        </div>

                        <div className='detail-sidebar'>
                            <div className='auth'>

                            </div>
                            <div className="navigation" ref={this.refHerf}>
                                <MarkdownNavbar
                                    className="article-menu toc-fixed"
                                    source={detail.content}
                                //headingTopOffset={250}
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

const mapDispatchToProps = dispatch => {
    return {
        getDetail: uid => dispatch(actions.getBlogDetail(uid)),
    }
}


const ExportDetail = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Index))
export default connect(mapStateToProps, mapDispatchToProps)(ExportDetail)