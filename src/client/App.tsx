import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from '../client/views/Home';
import Books from './views/Books';

import Login from './views/Login';
import Register from './views/Register';


const App = () => {


	return (
		<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/books' element={<Books />}/>

					<Route path='/login' element={<Login />}/>
					<Route path='/register' element={<Register />}/>
				</Routes>
		</BrowserRouter>
	);
};


export default App;