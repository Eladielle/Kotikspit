import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getUser } from "../features/auth/authSlice"

export default function Layout() {
  const token = useAppSelector(state => state.auth.token)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch, token])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
