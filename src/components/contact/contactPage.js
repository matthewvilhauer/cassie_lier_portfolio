import React, {PropTypes} from 'react';

const ContactPage = () => {
  return (
  	<div className="contact-page-container">
				<h1 className="contact-header">Contact</h1>
				<div className="social-media-icons">
					<a href="mailto:matthewvilhauer@gmail.com">
						<i className="social-media-icon smi-spacing fa fa-3x fa-envelope" aria-hidden="true"></i>
					</a>
					<a href="https://github.com/matthewvilhauer" target="_blank">
						<i className="social-media-icon smi-spacing fa fa-3x fa-github" aria-hidden="true"></i>
					</a>
					<a href="https://www.linkedin.com/in/matthewvilhauer" target="_blank">
						<i className="social-media-icon smi-spacing fa fa-3x fa-linkedin-square" aria-hidden="true"></i>
					</a>
					<a href="https://www.dropbox.com/s/juedfkh0adlbpeg/Matthew_Vilhauer_Resume.pdf?dl=0" target="_blank">
						<i className="social-media-icon fa fa-3x fa-file-text-o"></i>
					</a>
				</div>
		</div>
  );
};

export default ContactPage;
