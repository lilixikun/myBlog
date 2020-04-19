import React, { PureComponent } from "react"
import marked from 'marked';
import { PageHeader, Row, Descriptions, message } from 'antd';
import highlight from 'highlight.js';
import PageLoading from '../../../components/ReactLoading'
import { findByUid } from '../../../request/api'

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

class Look extends PureComponent {

    state = {
        record: {}
    }

    componentDidMount() {
        if (this.props.match.params.uid) {
            setTimeout(() => {
                findByUid(this.props.match.params.uid).then(res => {
                    if (res && res.code === 200) {
                        this.setState({ record: res.data })
                    }
                })
            }, 2000);
        }
        document.getElementsByClassName('site-page-header-ghost-wrapper')[0].addEventListener('click', this.onCopy, false)
    }

    componentWillUnmount() {
        document.getElementsByClassName('site-page-header-ghost-wrapper')[0].removeEventListener('click', this.onCopy, false)
    }

    /**
     * 自定义实现复制
     * @param {*} e 
     */
    onCopy = (e) => {
        if (e.toElement.tagName === "PRE") {
            var text = e.toElement.innerText;
            var textarea = document.createElement('textarea');
            document.body.appendChild(textarea);
            textarea.value = text;
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            message.success("复制成功!")
        }
    }

    render() {
        const { record } = this.state

        const content = (
            <>
                <Descriptions size="small" column={1}>
                    <Descriptions.Item label="文章出处">{record.articlesPart}</Descriptions.Item>
                </Descriptions>
                <Descriptions size="small" column={1}>
                    <Descriptions.Item label="简介">{record.summary}</Descriptions.Item>
                </Descriptions>
            </>
        );

        const Content = ({ children, extraContent }) => {
            return (
                <Row>
                    <div style={{ flex: 1 }}>{children}</div>
                    <div className="image">{extraContent}</div>
                </Row>
            );
        };

        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    subTitle={record.author}
                    title={record.title}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="点击次数">{record.clickCount}</Descriptions.Item>
                        <Descriptions.Item label="收藏次数">
                            <a>{record.collectCount}</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="创建时间">{record.createTime}</Descriptions.Item>

                    </Descriptions>
                    <Content
                        extraContent={
                            <img
                                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                                alt="content"
                                width="100%"
                            />
                        }
                    >
                        {content}
                    </Content>
                    <div dangerouslySetInnerHTML={{ __html: record.content ? marked(record.content) : `<p>暂无内容</p>` }}></div>
                </PageHeader>
            </div>
        )
    }
}



export default Look