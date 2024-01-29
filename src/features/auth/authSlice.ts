import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type AuthState from "./types/AuthState"
import type Credentials from "./types/LoginDTO"
import * as api from "./api"
import type RegistrationDTO from "./types/RegistrationDTO"

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
  token: localStorage.getItem("accessToken"),
}

export const getUser = createAsyncThunk("auth/getUser", () =>
  api.user(),
)

export const login = createAsyncThunk(
  "login",
  async (credentials: Credentials) => {
    if (!credentials.email.trim() || !credentials.password.trim()) {
      throw new Error("Не все поля заполнены")
    }
    return api.login(credentials)
  },
)

export const register = createAsyncThunk(
  "api/register",
  async (data: RegistrationDTO) => {
    return api.register(data)
  },
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 332 редьюсер для очистки ошибки
    resetLoginFormError: state => {
      state.loginFormError = undefined
    },
    resetRegisterFormError: state => {
      state.registerFormError = undefined
    },
    logout: state => {
      state.token = null
      state.authChecked = true
      localStorage.clearItem("accessToken")
      state.user = undefined
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.authChecked = true
        state.user = action.payload
      })
      .addCase(getUser.rejected, state => {
        state.authChecked = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginFormError = undefined
        state.token = action.payload.token
        localStorage.setItem("accessToken", action.payload.token)
        state.authChecked = true
      })
      // 332 так изменяется стэйт если вернулась ошибка
      .addCase(login.rejected, (state, action) => {
        state.loginFormError = action.error.message
        state.token = null
        localStorage.clearItem("accessToken")
        state.user = undefined
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loginFormError = undefined
        state.token = action.payload.token
        localStorage.setItem("accessToken", action.payload.token)
        state.authChecked = true
      })
      .addCase(register.rejected, (state, action) => {
        state.registerFormError = action.error.message
      })
  },
})

export const { resetLoginFormError, resetRegisterFormError } = authSlice.actions

export default authSlice.reducer
