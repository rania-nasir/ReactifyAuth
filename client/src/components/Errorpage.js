import React from "react"
import notfound from '../Images/notfound.png'
import { NavLink } from "react-router-dom"

const Errorpage = () => {
    return (
        <>
            <div className="notfound center mt-4">
                <img id="notfound404" src={notfound} alt="404-NotFound"></img>
            </div>
            <div className="center">
                <h3 id="notfound">WE ARE SORRY, PAGE NOT FOUND</h3>
            </div>
            <div className="center">
                <p id="error">
                    We can't seem to find the resource you're looking for.
                </p>
            </div>
            <div className="center mt-4">
                <NavLink className="btn btn-primary" to='/' >Back to Home Page</NavLink>
            </div>
        </>
    )
}

export default Errorpage