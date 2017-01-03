import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h2 className="about-header">About</h2>
				<p className="about-me-paragraph">
					Hi, I'm Cassie and these are my artistic endeavors!
				</p>
				<p className="about-me-paragraph">
					Illustration, Graphic Design, 3D Modeling.
				</p>
				<p className="about-me-paragraph">
					I'm currently a graduate student at SCAD.
				</p>
      </div>
    );
  }
}

export default AboutPage;
