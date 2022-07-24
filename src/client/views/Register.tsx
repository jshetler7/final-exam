import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';

const Register = () => {
	const nav = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

	const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		apiService('/auth/register', 'POST', { name, email, password })
		.then(register => {
			localStorage.setItem('token', register.token);
			nav('/books');
		})
		.catch(err => console.log(err))
    };

	return (
		<main className="container vh-100">
			<section className="row justify-content-center">
                <h1 className='text-center text-light'>Login</h1>
				<div className="col-md-6 mt-5">
					<form className="px-3 py-4 border rounded shadow">
                    <label className='text-light'>Name</label>
						<input
							type="text"
							name="name"
							autoComplete="current-name"
							className="form-control"
							value={name || ''}
							onChange={e => setName(e.target.value)}
						/>
						<label className='text-light'>Email</label>
						<input
							type="email"
							name="email"
							autoComplete="current-email"
							className="form-control"
							value={email || ''}
							onChange={e => setEmail(e.target.value)}
						/>
						<label className='text-light'>Password</label>
						<input
							type="password"
							name="password"
							autoComplete="current-password"
							className="form-control"
							value={password || ''}
							onChange={e => setPassword(e.target.value)}
						/>
						<div className="mt-3 d-flex justify-content-end">
							<button className="btn btn-primary" onClick={handleRegister}>
								Login
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};

export default Register;