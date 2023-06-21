import React from "react"
import raniapic from '../Images/rano.png'
import { NavLink } from "react-router-dom"

const About = () => {
    return (
        <>
            <div className="container emp_profile">
                <form action="" method="">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={raniapic} alt="profile"></img>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Rania</h5>
                                <h6>Full Stack Developer</h6>
                                <p className="profile-rating mt3 mb-5">
                                    Rankings: <span>1/10</span>
                                </p>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" id="home-tab" data-toggle='tab' role="tab" to='#home'>
                                        <NavLink className="nav-link active" to="#">About</NavLink>
                                    </li>
                                    <li className="nav-item" id="profile-tab" data-toggle='tab' role="tab" to='#profile'>
                                        <NavLink className="nav-link active" to="#">Timeline</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About