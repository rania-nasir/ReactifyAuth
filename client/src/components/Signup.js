import React, { useState } from "react";
import signpic from "../Images/registerationpic.svg"
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
        // console.log(setUser({ ...user, [name]: value }));
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })

        await res.json();
        if (res.status === 422) {
            window.alert('Invalid Credentials');
            console.log('Invalid Credentials');
        } else if (res.status === 200) {
            window.alert('Registration Successful');
            console.log('Registration Successful');
            navigate("/login");
        } else {
            window.alert('Something went wrong');
            console.log('Something went wrong');
        }

    }

    return (
        <>
            <section className="signup">
                <div className="container mt-3 center">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form right m-2" id="register-form" >
                                <div className="form-group">
                                    <label htmlFor="name"><i className="material-symbols-outlined">person_2</i> </label>
                                    <input placeholder="Your Name" type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="material-symbols-outlined">mail</i> </label>
                                    <input placeholder="Your Email" type="text" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="material-symbols-outlined">call</i> </label>
                                    <input placeholder="Your Phone" type="text" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="material-symbols-outlined">work</i> </label>
                                    <input placeholder="Your Profession" type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="material-symbols-outlined">lock</i> </label>
                                    <input placeholder="Your Password" type="text" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"><i className="material-symbols-outlined">lock</i> </label>
                                    <input placeholder="Confirm Your Password" type="text" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs} />
                                </div>
                                <div className="form-button submit-div">
                                    <input type="submit" name="signup" id="signup" className="btn btn-primary" value='Register'
                                        onClick={PostData}></input>
                                </div>
                            </form>

                            <figure className="App right">
                                <img src={signpic} alt="Registeration-Pic"></img>
                                <figcaption><NavLink to='/Login' className="signup-image-link">I am already register</NavLink></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Signup