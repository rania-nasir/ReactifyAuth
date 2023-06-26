import React, { useState, useContext } from 'react';
import loginpic from '../Images/loginpic.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        await res.json();
        if (res.status === 400 || res.status === 422) {
            window.alert('Invalid Credentials');
            console.log('Invalid Credentials');
        } else if (res.status === 200) {
            dispatch({ type: 'USER', payload: true });
            window.alert('Login Successful');
            console.log('Login Successful');
            navigate('/');
        } else {
            window.alert('Something went wrong');
            console.log('Something went wrong');
        }
    };
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
                            <form method="POST" className="login-form right m-3" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="email"><i className="material-symbols-outlined">mail</i> </label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your Email" type="text" name="email" id="email" autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="material-symbols-outlined">lock</i> </label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your Password" type="text" name="password" id="password" autoComplete="off"></input>
                                </div>
                                <div className="form-button submit-div">
                                    <input type="submit" name="login" id="login" className="btn btn-primary" value='Login'
                                        onClick={loginUser}></input>
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