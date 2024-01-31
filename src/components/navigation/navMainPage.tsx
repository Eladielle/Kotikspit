import { useState } from 'react'
import Navbar from './navbar/navPage'
import Sidebar from './sidebar/sidebarPage'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
		</>
	)
}

export default Navigation
