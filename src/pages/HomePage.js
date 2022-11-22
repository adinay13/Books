import React, {useEffect, useState} from 'react'
import {Table, Modal} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"
import Input from "antd/es/input/Input";


const HomePage = () => {

    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [editingBook, setEditingBook] = useState(null)
    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:4000/   books")
            .then(response=>response.json())
            .then(data=>{
                setDataSource(data)
            }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    },[dataSource])


    const columns = [
        {
            id: "id",
            title:"Title",
            dataIndex:"title"
        },
        {
            id: "id",
            title:"Author",
            dataIndex:"author"
        },
        {
            id: "id",
            title:"Action",
            render:(record)=>{
                return (
                    <>
                    <EditOutlined
                        onClick={()=>{
                        onEdit(record)
                    }}/>
                    <DeleteOutlined onClick={()=>{
                        onDelete(record)
                    }}
                      style={{color:"red", marginLeft:12}}/>
                </>
                )
            }

        },
    ]
    const onDelete = (record) =>{
        Modal.confirm({
            title:"Are you sure want to delete?",
            onOk:()=>{
               setDataSource(pre=>{
                    return pre.filter((book)=>book.id !== record.id)
                });
            },
        });
        }
    const onEdit = (record)=>{
        setIsEditing(true)
        setEditingBook({...record})
    };
    const resetEditing =()=>{
        setIsEditing(false)
        setEditingBook(null)
    }
    return(
        <>
        <Table
            // loading={loading}
            columns={columns}
            dataSource={dataSource}></Table>
        <Modal
            title="Edit book"
            visible={isEditing}
            okText="Save"
            onCancel={()=>{
                resetEditing()
            }}
            onOk={()=>{
                setDataSource(pre=>{
                    return pre.map(book=>{
                        if(book.id === editingBook.id){
                            return editingBook
                        }else {
                            return book
                        }
                    })
                })
                resetEditing()
            }
            }
        >
            <Input value={editingBook?.title} onChange={(e)=>{
                setEditingBook(pre=>{
                    return{...pre, title:e.target.value}
                })
            }}/>
            <Input value={editingBook?.author} onChange={(e)=>{
                setEditingBook(pre=>{
                    return{...pre, author:e.target.value}
                })
            }}/>
        </Modal>
        </>
    )
}

export default HomePage;