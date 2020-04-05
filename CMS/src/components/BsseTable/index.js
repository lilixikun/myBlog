import React from "react"
import PropTypes from "prop-types"
import { Table, Card, Row } from "antd"
import { PlusOutlined, DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';


function BaseTable(props) {

    const { columns, dataSource } = props
    const { onAdd } = props

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
                dataSource={dataSource}
                bordered={true}
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