import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from '../client/views/Home';
import Books from './views/Books';
import BookSpec from './views/BookSpec';
import EditBook from './views/EditBook';
import CreateBook from './views/CreateBook';

import Login from './views/Login';
import Register from './views/Register';


const App = () => {


	return (
		<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/books' element={<Books />}/>
					<Route path='/books/:id' element={<BookSpec />}/>
					<Route path='/books/:id/edit' element={<EditBook />} />
					<Route path='/books/new' element={<CreateBook />}/>

					<Route path='/login' element={<Login />}/>
					<Route path='/register' element={<Register />}/>
				</Routes>
		</BrowserRouter>
	);
};


export default App;