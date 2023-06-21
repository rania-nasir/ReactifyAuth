import React from "react";
import signpic from "../Images/registerationpic.svg"
import { NavLink } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-4 center">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form right m-3" id="register-form" action=''>
                                <div className="form-group">
                                    <label htmlFor="name"><i class="material-symbols-outlined">person_2</i> </label>
                                    <input placeholder="Your Name" type="text" name="name" id="name" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i class="material-symbols-outlined">mail</i> </label>
                                    <input placeholder="Your Email" type="text" name="email" id="email" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i class="material-symbols-outlined">call</i> </label>
                                    <input placeholder="Your Phone" type="text" name="phone" id="phone" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i class="material-symbols-outlined">work</i> </label>
                                    <input placeholder="Your Profession" type="text" name="work" id="work" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i class="material-symbols-outlined">lock</i> </label>
                                    <input placeholder="Your Password" type="text" name="password" id="password" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"><i class="material-symbols-outlined">lock</i> </label>
                                    <input placeholder="Confirm Your Password" type="text" name="cpassword" id="cpassword" autoComplete="off"></input>
                                </div>
                                <div className="form-button submit-div">
                                    <input type="submit" name="signup" id="signup" className="btn btn-primary" value='Register'></input>
                                </div>
                            </form>

                            <figure className="App right">
                                <img src={signpic} alt="Registeration-Pic"></img>
                                <figcaption><NavLink to='/Login.js' className="signup-image-link">I am already register</NavLink></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup