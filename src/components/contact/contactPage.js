import React, {PropTypes} from 'react';

const ContactPage = () => {
  return (
  	<div className="contact-page-container">
				<div className="contact-form-container">
					<div className="col-sm-5 col-sm-offset-1">
						<h3 className="contact-header">Contact</h3>
						<p>If you'd like to know more about a specific work or are interested in hiring Cassie to design something awesome for you, please use the contact form on the right. </p>
						<div className="social-media-icons">
							<a href="https://www.facebook.com/cassielierart/" target="_blank">
								<i className="social-media-icon smi-spacing fa fa-2x fa-facebook-square" aria-hidden="true"></i>
							</a>
							<a href="http://cassielierart.tumblr.com/" target="_blank">
								<i className="social-media-icon smi-spacing fa fa-2x fa-tumblr-square" aria-hidden="true"></i>
							</a>
							<a href="mailto:clier78@gmail.com">
								<i className="social-media-icon smi-spacing fa fa-2x fa-instagram" aria-hidden="true"></i>
							</a>
							<a href="http://cassielierart.tumblr.com/" target="_blank">
								<i className="social-media-icon smi-spacing fa fa-2x fa-twitter-square" aria-hidden="true"></i>
							</a>
						</div>
					</div>
					<div className="col-sm-5">
						<form>
							<div className="name-col name-col-spacing">
								<div className="label-container">
									<label>First name:</label>
								</div>
								<div>
									<input type="text"/>
								</div>
							</div>
							<div className="name-col">
								<div className="label-container">
									<label>Last name:</label>
								</div>
								<div>
									<input type="text"/>
								</div>
							</div>
							<div className="form-row">
								<div className="label-container">
									<label className="email-label">E-mail:</label>
								</div>
								<div>
									<input type="email"/>
								</div>
							</div>
							<div className="form-row">
								<div className="label-container">
									<label className="subject-label">Subject:</label>
								</div>
								<div>
									<input type="text"/>
								</div>
							</div>
							<div className="form-row">
								<div className="label-container">
									<label className="message-label">Message:</label>
								</div>
								<div>
									<textarea/>
								</div>
							</div>
							<div className="form-row">
								<input type="submit" value="Submit"/>
							</div>
						</form>
					</div>
				</div>

		</div>
  );
};

export default ContactPage;
