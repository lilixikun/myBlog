import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PageHeader, Row, Descriptions, Typography } from 'antd';
import './index.less'

const { Paragraph } = Typography;

function Look(props) {
    const { record } = props

    const onClick = (e) => {
        if (e.toElement.tagName === "PRE") {
            console.log(e.toElement.innerText);
        }
    }

    useEffect(() => {
        document.getElementsByClassName('site-page-header-ghost-wrapper')[0].addEventListener('click', onClick, false)

        return () => {
            document.getElementsByClassName('site-page-header-ghost-wrapper')[0].removeEventListener('click', onClick, false)
        }
    })


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
                <div dangerouslySetInnerHTML={{ __html: record.content }}></div>
            </PageHeader>
        </div>
    )
}

const mapStateToProps = ({ blog, tag, blogSort }) => ({
    record: blog.record,
    tagList: tag.dataSource,
    blogSortList: blogSort.dataSource
})

export default connect(mapStateToProps, null)(Look)