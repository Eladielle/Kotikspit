import { useState } from 'react'
import Navbar from './navbar/navPage'
import Sidebar from './sidebar/sidebarPage'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	// const user = useSelector((state: RootState) => state.auth.user);
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
		</>
	)
}

export default Navigation
