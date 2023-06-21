import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"
import logo from '../Images/mern.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand ml-3" to="/">
                    <img className="logo" src={logo} alt='logo' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active p-1">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className="nav-link" to="/about">About <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className="nav-link" to="/contact">Contact<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className="nav-link" to="/login">Login<span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <NavLink className="nav-link" to="/signup">Register<span className="sr-only"></span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar