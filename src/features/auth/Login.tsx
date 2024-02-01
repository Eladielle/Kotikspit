import type { ChangeEvent, FormEvent} from "react";
import { useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { login, resetLoginFormError } from "./authSlice"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import React from "react"
import { selectLoginFormError } from "./Selectors"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
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
        }),
      )

      if (login.fulfilled.match(dispatchResult)) {
        navigate("/")
      }
      if (login.rejected.match(dispatchResult)) {
        console.error(dispatchResult.error.message)
      }
    },
    [dispatch, email, password, navigate],
  )

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
      // 332 очищаем ошибку
      dispatch(resetLoginFormError())
    },
    [dispatch],
  )

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
      dispatch(resetLoginFormError())
    },
    [dispatch],
  )

  return (
    <Box sx={{ fontFamily: "Literata", my: 2 }}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Box sx={{ fontSize: 40, fontWeight: 500, textAlign: "center" }}>
          Login page
        </Box>
        <Box sx={{ margin: "0 auto" }}>
          <TextField
            autoComplete="false"
            required
            fullWidth
            color="secondary"
            margin="normal"
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box sx={{ margin: "0 auto" }}>
          <TextField
            required
            fullWidth
            color="secondary"
            margin="normal"
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
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
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button variant="contained" type="submit" color="info">
            Log in
          </Button>
          {error && <Box sx={{ display: "block" }}>{error}</Box>}
        </Box>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Link href="/register" color="secondary">
            Not registred? Join us!
          </Link>
        </Box>
      </form>
    </Box>
  );
}
