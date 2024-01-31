import type { FormEvent } from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { login } from './authSlice'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useAppDispatch()
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		dispatch(login({ email, password }))
	}

	return (
		<div className="min-h-screen flex relative items-center justify-center top-[0px]">
			<div className="bg-gray-800 p-10 rounded shadow-md w-96">
				<h1 className="text-2x1 text-lg mb-6 mt-0 text-white">
					<p>Welclome Back!</p>
					<p>Please Login to continue:</p>
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-white">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Enter your email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="w-full border rounded px-3 py-2 mt-1"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-white">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							autoComplete={password ? 'on' : 'off'}
							className="w-full border rounded px-3 py-2 mt-1"
						/>
					</div>
					<div className="flex items-center justify-between mb-4">
						{/* Forgot Password link */}
						<a href="/forgotPassword" className="text-sm text-white hover:text-primary">
							Forgot Password?
						</a>
						{/* Registration link */}
						<a href="/register" className="text-sm text-white hover:text-primary">
							<p>Don't have an account?</p>
							<p>Please Register</p>
						</a>
					</div>
					<button
						type="submit"
						className="w-full bg-primary text-white rounded px-4 py-2 hover:bg-red-600"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
