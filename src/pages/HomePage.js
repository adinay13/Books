import React, {useEffect, useState} from 'react';
import axios from "axios";
import _Table from "../components/_Table";

export const api = "http://localhost:4000/books"

const HomePage = () => {

  const [book, setBook] = useState([])

    const getBook = ()=>{
        axios.get(api).then((res)=>{
            setBook(res.data)
        })

    }
    useEffect(()=> {
        getBook()
    },[])
    console.log(book)
    return (
        <>
            {/*<_Table book={book}/>*/}

            <ol className="list">
                {book.map((item)=>{
                    return <li className="item" key={item.id}>
                        title:{item.title},<br/>
                        author:{item.author}
                    </li>
                })}
            </ol>
        </>
    );
};

export default HomePage;