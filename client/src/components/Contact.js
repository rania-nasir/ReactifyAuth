import React from "react";

const Contact = () => {
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
                                            <input type="text" id="contact_form_name" className="p-2 section contact_form_name input_field" placeholder="Your Name" required="true"></input>
                                        </div>
                                        <div className="box-contact right contact_form_email d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_email" className="p-2 section contact_form_email input_field" placeholder="Your Email" required="true"></input>
                                        </div>
                                        <div className="box-contact right contact_form_number d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_number" className="p-2 section contact_form_number input_field" placeholder="Your Number" required="true"></input>
                                        </div>

                                        <div className="contact_form_text mt-5">
                                            <textarea className="text_field section contact_form_message p-2" placeholder="Your Message here" cols={120} rows={8}></textarea>
                                        </div>
                                        <div className="contact_form_button mt-2">
                                            <button type="submit" className="contact_submit_button btn btn-primary">Send Message</button>
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