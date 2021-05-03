import React from 'react';

function Contact () {
    return (
        <section className="contact-page-container">
			<div className="contact-page-subcontainer">
                <div className="contact-page-header">
				    <h2>Get in touch with us</h2>
                </div>
                <div className="contact-page-subheader">
				    <p>Feel free to leave us a message and we will get back to you as soon as we can:</p>
                </div>

				<div className="contact-page-messsage-form">
					<section>
						<form method="POST" action="https://formspree.io/f/xayayarj">
							<div className="fields">

                                <div className="contact-form-first-row">
                                    <div className="contact-page-field">
                                        <label for="name">Name</label>
                                        <input className="contact-page-input" type="text" name="name" id="name" />
                                    </div>
                                    <div className="contact-page-field">
                                        <label for="email">Email</label>
                                        <input className="contact-page-input" type="text" name="email" id="email" />
                                    </div>
                                </div>
								
								<div className="contact-page-text-field">
									<label for="message">Message</label>
									<textarea name="message" id="message" rows="5"></textarea>
								</div>
							</div>
							<ul>
								<button className="contact-page-submit-btn">Send Message</button>
							</ul>
						</form>
					</section>
				</div>
			</div>
            <section>
			    <ul>
			    	<li>
			    		<h3 className="contact-email-element">Email</h3>
			    		<a href="mailto:protect.our.elders.contact@gmail.com ">protect.our.elders.contact@gmail.com </a>
			    	</li>
			    </ul>
			</section>
	    </section>
    )
}
export default Contact;