import { useEffect, React, useState } from "react"

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log('data = ' + data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    // we are storing data in states
    const handleInputs = (e) => {   // e = event object
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value })
    }

    // send data to bckend

    const ContactForm = async (e) => {
        e.preventDefault();
        // object destructuring
        const { name, email, phone, message } = userData;
        fetch('/contact', {
            method: "POST",
            headers: {
                "Contact-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            });

            const data = await res.json();
            if(!data) {
                console.log('Message not sent');
            } else {
                alert('Message Sent!');
                setUserData({ ...userData, message:"" });
            }
        })
    }
    return (
        <>
            <div className="contact-info">
                <div className="center container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex">
                            {/* phone box */}
                            <div className="box p-2 m-4 contact_info_item d-flex justify-content-start align-items-center">
                                <span className="material-symbols-outlined">
                                    smartphone
                                </span>
                                <div className="contact_info_content p-2">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        03346543777
                                    </div>
                                </div>
                            </div>
                            {/* email box */}
                            <div className="box p-2 m-4 contact_info_item d-flex justify-content-start align-items-center">
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                                <div className="contact_info_content p-2">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        raniabm21@gmail.com
                                    </div>
                                </div>
                            </div>
                            {/* Address box */}
                            <div className="box p-2 m-4 contact_info_item d-flex justify-content-start align-items-center">
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                                <div className="contact_info_content p-2">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Faisalabad, Pakistan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact us form */}

            <div className="contact_form center">
                <div>
                    <div className="row">
                        <div>
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title ml-2">
                                    <h3> Get In Touch</h3>
                                </div>
                                <form id="contact_form" action="" className="center">
                                    <div className="container">
                                        <div className="box-contact right contact_form_name center">
                                            <input type="text" id="contact_form_name"
                                                className="p-2 section contact_form_name input_field"
                                                value={userData.name}
                                                name="name"
                                                onChange={handleInputs}
                                                placeholder="Your Name" required="true"></input>
                                        </div>
                                        <div className="box-contact right contact_form_email d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_email"
                                                className="p-2 section contact_form_email input_field"
                                                value={userData.email}
                                                name="email"
                                                onChange={handleInputs}
                                                placeholder="Your Email" required="true"></input>
                                        </div>
                                        <div className="box-contact right contact_form_number d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_number"
                                                className="p-2 section contact_form_number input_field"
                                                value={userData.phone}
                                                name="phone"
                                                onChange={handleInputs}
                                                placeholder="Your Number" required="true"></input>
                                        </div>

                                        <div className="contact_form_text mt-5">
                                            <textarea className="text_field section contact_form_message p-2"
                                                value={userData.message}
                                                name="message"
                                                onChange={handleInputs}
                                                placeholder="Your Message here" cols={120} rows={8}></textarea>
                                        </div>
                                        <div className="contact_form_button mt-2">
                                            <button type="submit" onClick={ContactForm}
                                                className="contact_submit_button btn btn-primary">Send Message</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact