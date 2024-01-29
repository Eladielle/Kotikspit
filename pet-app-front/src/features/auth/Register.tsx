import { useCallback, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { selectRegisterFormError } from "./Selectors"
import { login, register, resetRegisterFormError } from "./authSlice"

export default function Register() {
  const location = useLocation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const error = useSelector(selectRegisterFormError)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('');
	const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = (): void => {
	setShowPassword((prevShowPassword: boolean) => !prevShowPassword);
	};

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
      navigate('/');

      if (location.pathname === '/api/v1/auth/registration') {
        navigate('/api/users/my/profile');
      } else if (location.pathname.startsWith('api/v1/users/this')) {
        navigate(location.pathname);
      }
    }
  },
  [dispatch, email, password, passwordRepeat, location.pathname, navigate]
);
const handleEmailChange = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    dispatch(resetRegisterFormError());
  },
  [dispatch]
);

const handlePasswordChange = useCallback(
  (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    dispatch(resetRegisterFormError());
  },
  [dispatch]
);

const handlePasswordRepeatChange = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(event.target.value);
    dispatch(resetRegisterFormError());
  },
  [dispatch]
);
 
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
    <h2>Register</h2>
    {error && (
      <div className="invalid-feedback rm" style={{ display: 'block' }}>
        {error}
      </div>
    )}
    <div className="rm">
      <label htmlFor="email-input" className="form-label">
        Email
      </label>
      <input
        type="text"
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id="name-input"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
    <div className="rm">
      <label htmlFor="password-input" className="form-label">
        Password
      </label>
      <input
        type="password"
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id="password-input"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password-repeat-input" className="form-label">
        Repeat password
      </label>
      <input
        type="password"
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id="password-repeat-input"
        name="passwordRepeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeatChange}
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  )
}
