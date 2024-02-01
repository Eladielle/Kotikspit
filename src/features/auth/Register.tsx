import { useCallback, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Box, Button, IconButton, InputAdornment, Link, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRegisterFormError } from './Selectors'
import { login, register, resetRegisterFormError } from './authSlice'

export default function Register() {
	const location = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const error = useAppSelector(selectRegisterFormError)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('')
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleTogglePasswordVisibility = (): void => {
		setShowPassword((prevShowPassword: boolean) => !prevShowPassword)
	}

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const dispatchResult = await dispatch(
      register({
        email,
        password,
        passwordRepeat,
      })
    );
    
    if (register.fulfilled.match(dispatchResult)) {
      await dispatch(login({ email, password }));
      alert("Вам отправлено электронное письмо для подтверждения");

				if (location.pathname === '/api/v1/auth/registration') {
					navigate('auth/login')
				} else if (location.pathname.startsWith('api/v1/users/this')) {
					navigate(location.pathname)
				}
			}
		},
		[dispatch, email, password, passwordRepeat, location.pathname, navigate]
	)
	const handleEmailChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setEmail(e.target.value)
			dispatch(resetRegisterFormError())
		},
		[dispatch]
	)

	const handlePasswordChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value)
			dispatch(resetRegisterFormError())
		},
		[dispatch]
	)

	const handlePasswordRepeatChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPasswordRepeat(event.target.value)
			dispatch(resetRegisterFormError())
		},
		[dispatch]
	)

	return (
		<Box sx={{ fontFamily: 'Raleway', my: 5 }}>
			<form className="auth-form" onSubmit={handleSubmit}>
				<Box sx={{ fontSize: 30, fontWeight: 400, textAlign: 'center' }}>Registration page</Box>
				<Box sx={{ margin: '0 auto' }}>
					<TextField
						autoComplete="false"
						required
						fullWidth
						color="secondary"
						margin="normal"
						label="Email"
						variant="outlined"
						value={email}
						onChange={handleEmailChange}
					/>
				</Box>
				<Box sx={{ margin: '10 auto' }}>
					<TextField
						required
						fullWidth
						color="secondary"
						margin="normal"
						id="password-input"
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
				<Box sx={{ margin: '0 auto' }}>
					<TextField
						required
						fullWidth
						color="secondary"
						margin="normal"
						id="password-repeat-input"
						label="Repeat password"
						variant="outlined"
						type={showPassword ? 'text' : 'password'}
						value={passwordRepeat}
						onChange={handlePasswordRepeatChange}
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
				<Box sx={{ textAlign: 'center', my: 3 }}>
					<Button variant="contained" type="submit" color="secondary">
						Sign up
					</Button>
					{error && <Box sx={{ display: 'block' }}>{error}</Box>}
				</Box>
				<Box sx={{ textAlign: 'center' }}>
					<Link href="/login" color="secondary">
						Already registered? Login
					</Link>
				</Box>
			</form>
		</Box>
	)
}
