import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </nav>
    </div>
  )
}
