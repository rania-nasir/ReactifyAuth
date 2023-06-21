import React from "react"
import raniapic from '../Images/rano.png'
import { NavLink } from "react-router-dom"

const About = () => {
    return (
        <>
            <div className="container emp_profile">
                <form action="" method="">
                    <div className="row">
                        <div className="col-md-4 mt-5 ml-4">
                        <div className="profile-img">
                                <img src={raniapic} alt="profile"></img>
                            </div>
                            <div className="col-md-2 mt-2">
                                <input type="submit" className="profile-edit-btn m-2" name="btnAddMore" value="Edit Profile" />
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <p>WORK LINK</p>
                                    <NavLink to="https://www.linkedin.com/in/rania-bm-217bab26a/?originalSubdomain=pk" target="_blank">Rania-LinkedIn</NavLink><br />
                                    <NavLink to="https://github.com/RaniaBm" target="_blank">Rania-GitHub</NavLink><br />
                                    <NavLink to="https://www.instagram.com/codebook_01/" target="_blank">CodeBook-Instagram</NavLink><br />
                                    <NavLink to="https://www.instagram.com/_dyna__mite/" target="_blank">Dynamite-Instagram</NavLink><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 pt-2">
                            <div className="profile-head">
                                <h5>Rania</h5>
                                <h6>Full Stack Developer</h6>
                                <div className="tab-pane fade show active mt-5">
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>1234567890</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Rania</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>raniabm21@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>03346543777</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Full Stack Developer</p>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Faisalabad, Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default About