import React from 'react';
import languages from '../../util/language_util';

function Contact (props) {
    return (
        <section className="contact-page-container">
			<div className="contact-page-subcontainer">
                <div className="contact-page-header">
					<h2>{languages[`${props.language}`].getInTouch}</h2>
                </div>
                <div className="contact-page-subheader">
					<p>{languages[`${props.language}`].feelFree}</p>
                </div>

				<div className="contact-page-messsage-form">
					<section>
						<form method="POST" action="https://formspree.io/f/xayayarj">
							<div className="fields">

                                <div className="contact-form-first-row">
                                    <div className="contact-page-field">
										<label for="name">{languages[`${props.language}`].name}</label>
                                        <input className="contact-page-input" type="text" name="name" id="name" />
                                    </div>
                                    <div className="contact-page-field">
										<label for="email">{languages[`${props.language}`].email}</label>
                                        <input className="contact-page-input" type="text" name="email" id="email" />
                                    </div>
                                </div>
								
								<div className="contact-page-text-field">
									<label for="message">{languages[`${props.language}`].message}</label>
									<textarea name="message" id="message" rows="5"></textarea>
								</div>
							</div>
							<ul>
								<button className="contact-page-submit-btn">{languages[`${props.language}`].sendMessage}</button>
							</ul>
						</form>
					</section>
				</div>
			</div>
            <section>
			    <ul>
			    	<li>
						<h3 className="contact-email-element">{languages[`${props.language}`].email}</h3>
			    		<a href="mailto:protect.our.elders.contact@gmail.com ">protect.our.elders.contact@gmail.com </a>
			    	</li>
			    </ul>
			</section>
	    </section>
    )
}
export default Contact;