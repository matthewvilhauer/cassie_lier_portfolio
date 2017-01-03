import React, {PropTypes} from 'react';

const ContactPage = () => {
  return (
  	<div className="contact-page-container">
				<h2 className="contact-header">Contact</h2>
				<div className="social-media-icons">
					<a href="mailto:clier78@gmail.com">
						<i className="social-media-icon smi-spacing fa fa-3x fa-envelope" aria-hidden="true"></i>
					</a>
					<a href="https://www.facebook.com/cassielierart/" target="_blank">
						<i className="social-media-icon smi-spacing fa fa-3x fa-facebook-square" aria-hidden="true"></i>
					</a>
					<a href="http://cassielierart.tumblr.com/" target="_blank">
						<i className="social-media-icon smi-spacing fa fa-3x fa-tumblr-square" aria-hidden="true"></i>
					</a>
					<i class="fa fa-tumblr-square" aria-hidden="true"></i>
				</div>
		</div>
  );
};

export default ContactPage;
