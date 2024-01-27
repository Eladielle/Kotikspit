import type { FormEvent } from "react"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { login } from "./authSlice"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useAppDispatch()
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log("bla")
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          id=""
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  )
}
