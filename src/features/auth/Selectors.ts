import type { RootState } from '../../app/store'
import AuthState from './types/AuthState'
import type User from './types/User'

export const selectAuthChecked = (state: RootState): boolean =>
	state.auth.authChecked
export const selectUser = (state: RootState): User | undefined =>
	state.auth.user
export const selectLoginFormError = (state: RootState): string | undefined =>
	state.auth.loginFormError
export const selectRegisterFormError = (state: RootState): string | undefined =>
	state.auth.registerFormError
	export const selectAuth = (state: RootState): AuthState | undefined =>
  state.auth;
