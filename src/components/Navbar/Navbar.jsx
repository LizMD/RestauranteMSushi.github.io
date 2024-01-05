import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
<header>
    <nav>
        <div className="logo">
            <NavLink to="/">
            <img src="logo.png" height={100} alt="logo" /> 
            </NavLink>
        </div>
        <ul>
		<li><NavLink to="/">Inicio</NavLink></li>
		<li><NavLink to="/promociones">Promociones</NavLink></li>
		<li><NavLink to="/reservas">Reservas</NavLink></li>
	 </ul>
    </nav>
</header>
    )
  }