import { useEffect, useState } from 'react'
import Button from './button'

const Logo = () => {
	const [width, setWidth] = useState(0)

	const updateWidth = () => {
		const newWidth = window.innerWidth
		setWidth(newWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', updateWidth)
		updateWidth()
	}, [])

	const [showButton, setShowButton] = useState(false)

	const changeNavButton = () => {
		if (window.scrollY >= 400 && window.innerWidth < 768) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNavButton)
	}, [])

	return (
		<>
			<a href="/" style={{ display: showButton ? 'none' : 'block' }}>
				<img
					src="/img/logo29.png"
					alt="Logo"
					width={width < 1024 ? '30' : '45'}
					height={width < 1024 ? '30' : '45'}
					className="relative"
				/>
			</a>
			<div
				style={{
					display: showButton ? 'block' : 'none',
				}}
			>
				<Button />
			</div>
		</>
	)
}

export default Logo
