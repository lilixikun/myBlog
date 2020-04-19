import React, { useState } from "react"
import PropTypes from "prop-types"
import { Table, Card, Row } from "antd"
import { PlusOutlined, DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';


function BaseTable(props) {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const { columns, dataSource } = props
    const { onAdd, onSizeChange } = props

    const onChange = (page, pageSize) => {
        setPage(page)
        setPageSize(pageSize)
        onSizeChange(page, pageSize)
    }

    return (
        <Card>
            {props.children}
            <Row justify="end" style={{ height: 24 }}>
                <PlusOutlined style={{ fontSize: 16 }} onClick={onAdd} />
                <DatabaseOutlined style={{ fontSize: 16 }} />
                <DownloadOutlined style={{ fontSize: 16 }} />
            </Row>
            <Table
                columns={columns}
                dataSource={dataSource.rows}
                bordered={true}
                pagination={{
                    total: dataSource.count,
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                    current: page,
                    pageSize: pageSize,
                    onShowSizeChange: onChange,
                    showQuickJumper: true,
                    showTotal: total => `共有${total}条数据`,
                    onChange: onChange
                }}
                rowKey="uid"
                size="small"
            />
        </Card>
    )
}

BaseTable.prototype = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired,
    onAdd: PropTypes.func
}

BaseTable.defaultProps = {
    columns: [],
    dataSource: [],
    onAdd: () => { }
}

export default BaseTable