import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';
import { Categories } from '../types';

const CreateBook = () => {

    const nav = useNavigate();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [category, setCategory] = useState<Categories[]>([]);
    const [selectedCat, setSelectedCat] = useState<number>(0);

    useEffect(() => {
        apiService('/api/categories')
        .then(data => setCategory(data))
        .catch(err => console.log(err))
    }, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title, author, price, categoryid: selectedCat })
        .then(() => {
            nav('/books')
        })
        .catch(err => console.log(err));
    };

    return(
        <div className="container vh-100">
            <div className="row justify-content-center">
                <h1 className='text-light text-center mt-5'>Add A Book to the List!</h1>
                <div className="col-12 col-md-6 mt-5">
                    <form className='form-control'>
                            <input type="text" className="input-group mt-2" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
                            <input type="text" className="input-group mt-2" placeholder='Author' onChange={e => setAuthor(e.target.value)}/>
                            <input type="text" className="input-group mt-2" placeholder='Price($)' onChange={e => setPrice(Number(e.target.value))}/>
                            <select className="form-select" value={selectedCat} onChange={(e) => setSelectedCat(Number(e.target.value))}>
                            <option value="0">Select A Category!</option>
                                {category.map((cat) => (
                                    <option key={`cat-id-${cat.id}`} value={cat.id}>
                                    {cat.name}
                                    </option>
                                ))}
                            </select>

                            <button className='btn btn-dark col-4 col-md-2' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default CreateBook;