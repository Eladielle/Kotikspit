import type { ChangeEvent, FormEvent, JSXElementConstructor } from 'react'
import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { login, resetLoginFormError } from './authSlice'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
	Box,
	Link,
	TextField,
	InputAdornment,
	IconButton,
	Button,
	createTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { selectLoginFormError } from './Selectors'
import '../../features/auth/auth-bg.css'
import Navigation from '../../components/navigation/navMainPage'

export default function Login(): JSX.Element {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const error = useAppSelector(selectLoginFormError)
	const handleTogglePasswordVisibility = (): void => {
		setShowPassword((prevShowPassword: boolean) => !prevShowPassword)
	}

	const handleSubmit = useCallback(
		async (e: FormEvent) => {
			e.preventDefault()
			const dispatchResult = await dispatch(
				login({
					email,
					password,
				})
			)

			if (login.fulfilled.match(dispatchResult)) {
				navigate('/')
			}
			if (login.rejected.match(dispatchResult)) {
				console.error(dispatchResult.error.message)
			}
		},
		[dispatch, email, password, navigate]
	)

	const handleEmailChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setEmail(e.target.value)
			// 332 очищаем ошибку
			dispatch(resetLoginFormError())
		},
		[dispatch]
	)

	const handlePasswordChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value)
			dispatch(resetLoginFormError())
		},
		[dispatch]
	)

	return (
		<>
			<Navigation />
			<div className="bg-header flex items-center justify-center mt-20">
				<Box sx={{ fontFamily: 'Arial', my: 2 }}>
					<form className="auth-form" onSubmit={handleSubmit}>
						<Box
							sx={{
								bgcolor: 'grey.900',
								fontSize: 30,
								fontWeight: 600,
								color: '#de1945',
								textAlign: 'center',
							}}
						>
							Welcome back!
						</Box>
						<Box sx={{ margin: '0px auto', mx: 4 }}>
							<TextField
								autoComplete="false"
								required
								fullWidth
								color="error"
								margin="normal"
								id="email"
								label="Email"
								variant="outlined"
								value={email}
								onChange={handleEmailChange}
							/>
						</Box>
						<Box sx={{ margin: '0px auto', mx: 4 }}>
							<TextField
								required
								fullWidth
								color="error"
								margin="normal"
								id="password"
								label="Password"
								variant="outlined"
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={handlePasswordChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleTogglePasswordVisibility}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Box>
						<Box sx={{ textAlign: 'center', my: 4 }}>
							<Button variant="contained" type="submit" color="error">
								Log in
							</Button>
							{error && <Box sx={{ display: 'block' }}>{error}</Box>}
						</Box>
						<Box sx={{ textAlign: 'center', my: 4 }}>
							<Link href="/register" color="error">
								Not registred? Join us!
							</Link>
						</Box>
					</form>
				</Box>
			</div>
		</>
	)
}
