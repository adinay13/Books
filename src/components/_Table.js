import React from 'react';
import {Table} from "antd";


const columns = [
    {
        title: 'Author',
        dataIndex:'book.author',
        key:'name'
    },
    {
        title: 'Number',
        dataIndex:'number',
        key:'number'
    },
    {
        title: 'Class',
        dataIndex:'class',
        key:'class'
    },
    {
        title: 'Rate',
        dataIndex:'fleeRate',
        key:'fleeRate'
    },
]

const _Table = ({book}) => {
    return (
        <Table
        dataSource={book}
        columns={columns}
        />
    );
};

export default _Table;