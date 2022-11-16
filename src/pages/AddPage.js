import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
const addApi = "http://localhost:4000/books"
const AddPage = () => {
    const[newBook, setNewBook] = useState({

        title:'',
        author:'',
        id: Math.random()
    })
    const addBook = async (newBook)=>{
        try{
            await axios.post(addApi, newBook)
        }catch (error){
            console.log(error)
        }

    }
    const forma = (event)=>{
        event.preventDefault()
        for(const key in newBook){
            if(!newBook[key]){
                alert("заполните поля")
                return
            }
        }
        addBook(newBook)
    }

    return (
        <>
            <Link to="/">
                <button>HomePage</button>
            </Link>
            <form onSubmit={forma}>
                <input type="text" placeholder="title" value={newBook.title}
                       onChange={(event)=> setNewBook({...newBook, title:event.target.value})}/>
                <input type="text" placeholder="author" value={newBook.author}
                       onChange={(event)=> setNewBook({...newBook, author:event.target.value})}/>
                <button type="submit" onClick={(event)=>console.log("ok")}>ОК</button>

            </form>

        </>
    );
};

export default AddPage;