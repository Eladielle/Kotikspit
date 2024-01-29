import type User from "./User"

export default interface AuthState {
  authChecked: boolean
  token?: string
  user?: User
  loginFormError?: string
  registerFormError?: string
}
