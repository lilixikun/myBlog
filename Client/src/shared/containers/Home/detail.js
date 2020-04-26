import React, { PureComponent } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles';
import DiamonLoading from 'react-loadingg/lib/CircleLoading';

import { connect } from 'react-redux'
import marked from 'marked';
import highlight from 'highlight.js';
import * as actions from './store/actions'
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

    componentDidMount() {
        const { uid } = this.props.match.params
        if (!!uid) {
            this.props.getDetail(uid)
        }

    }

    render() {
        const { detail } = this.props

        return (
            <div>
                {!detail.uid ? <DiamonLoading size="large" /> :
                    <div dangerouslySetInnerHTML={{ __html: detail.content && marked(detail.content) }}></div>
                }
            </div>
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