import { Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import Login from "./features/auth/Login"
import Home from "./components/Home"
import Register from "./features/auth/Register"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
