import * as React from 'react';
import { useState, useEffect } from 'react';
import { Books, BooksWithCat } from '../types';
import { apiService } from '../services/apiService';
import { useParams, useNavigate } from 'react-router-dom';


const BookSpec = () => {
    const [book, setBook] = useState<BooksWithCat>();
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        apiService('/api/books/' + id)
        .then(data => setBook(data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete = (book:BooksWithCat) => {
        if (!confirm("Are you SURE you want to delete this book?")) return;
  
      apiService(`/api/books/${book}`, 'DELETE')
      .then(() => {
        nav('/books');
    })
      .catch(err => console.error(err));
    };

    const handleEdit = (book:BooksWithCat) => {
        nav(`/books/${book}/edit`);
    }


    return(
        <div className="container vh-100 vw-100">
            <div className="row justify-content-center">
                <h1 className='text-light mt-5 text-center'>Specifications: </h1>
                <div className="card col-12 col-md-6 mt-5">
                    <div className="card-title text-center">
                        <h3>{book?.title}</h3>
                    </div>
                    <div className="card-subtitle text-center">
                        <h4>{book?.author}</h4>
                    </div>
                    <div className="card-body text-center">
                        <h4>${book?.price}</h4>
                        <button className='btn btn-large btn-outline-success'>Buy Now</button>
                        <div className="row mt-5 justify-content-between">
                            {/* @ts-ignore */}
                            <button className="btn btn-danger col-4 col-md-5" onClick={() => handleDelete(book?.id)}>Delete</button>
                            {/* @ts-ignore */}
                            <button className="btn btn-warning col-4 col-md-5" onClick={() => handleEdit(book?.id)}>Edit</button>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className='btn btn-primary'>{book?.name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookSpec;