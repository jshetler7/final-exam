import * as React from 'react';
import { useState, useEffect } from 'react';
import { Books, BooksWithCat } from '../types';
import { apiService } from '../services/apiService';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState<BooksWithCat[]>([]);
    

    useEffect(() => {
        apiService('/api/books')
        .then(data => setBooks(data))
        .catch(err => console.log(err))
    }, []);


    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1 className='text-light mt-5 text-center'>Book Listing</h1>
                <ul className="list-group col-12 col-md-10 mt-5">
                    {books.map((book) => (
                        <Link to={'/books/' + book.id} key={`List-Number-${book.id}`} style={{textDecoration: 'none'}}>
                        <div className="list-group-item">
                            <h3>{book.title}</h3>
                            <h4>{book.author}</h4>
                            <h4>${book.price}</h4>
                            <button className='btn btn-primary'>{book.name}</button>
                        </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Books;