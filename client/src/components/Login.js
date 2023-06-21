import React from "react";
import loginpic from "../Images/loginpic.jpg"
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="container-fluid mt-5 center">
                    <div className="login-content">
                        <div className="login-form">
                            <h2 className="form-title">Log In</h2>
                            <figure className="App right">
                                <img src={loginpic} alt="Login-Pic"></img>
                                <figcaption><NavLink to='/signup' className="signup-image-link">Create an account</NavLink></figcaption>
                            </figure>
                            <form className="login-form right m-3" id="login-form" action=''>
                                <div className="form-group">
                                    <label htmlFor="email"><i class="material-symbols-outlined">mail</i> </label>
                                    <input placeholder="Your Email" type="text" name="email" id="email" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i class="material-symbols-outlined">lock</i> </label>
                                    <input placeholder="Your Password" type="text" name="password" id="password" autoComplete="off"></input>
                                </div>
                                <div className="form-button submit-div">
                                    <input type="submit" name="login" id="login" className="btn btn-primary" value='Login'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login