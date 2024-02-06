import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './features/auth/Login'
import Home from './features/home/Home'
import Register from './features/auth/Register'
import PageNews from './features/news/page-news/PageNews'
import OneNews from './features/news/one-news/OneNews'
import Adventures from './features/adventures/Adventures'
import Games from './features/games/Games'
import About from './features/about/About'
import Contacts from './features/contacts/Contacts'
import Experience from './features/experience/Experience'
import ForgotPassword from './features/auth/ForgotPassword'
import Comment from "./features/news/comment/Comment"
import { user } from './features/auth/api'
import CreateGame from './features/games/CreateGame'


const App = (): React.ReactNode => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="experience" element={<Experience />} />
					<Route path="adventures" element={<Adventures />} />
					<Route path="games" element={<Games />} />
					{/* {user && (user.role === 'Admin') && */}
					<Route path="/adminCab" element={<CreateGame />} />
					<Route path="news" element={<PageNews />} />
					<Route path="news/comment/:commentId" element={<Comment />} />
					<Route path="news/:newsId" element={<OneNews />} />
					<Route path="about" element={<About />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					{/* <Route path="confirm/:confirmCode" element={<Confirm />} /> */}
					<Route path="forgotPassword" element={<ForgotPassword />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
