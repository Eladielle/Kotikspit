import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../../features/auth/Selectors"
import { getUser } from "../../../features/auth/authSlice"
import { useAppDispatch } from "../../../app/hooks"
import './button.css'

export default function Button() {
	const user = useSelector(selectUser)
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(getUser())
	}, [dispatch])
	
	return (
		<>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/login">Sign In</a>
			</button>
			<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">Sign Out</button>
			{ user && user.role === 'ADMIN' && (<button className="h-6 rounded bg-primary font-bold px-3 hover:bg-red-500">
				<a href="/adminCab">Admin Cabinet</a>
			</button>)}
			<button className="buttonn">
			<a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
			</button>
		</>
	)
}
