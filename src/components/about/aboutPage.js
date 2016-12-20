import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-header">About</h1>
				<p class="about-me-paragraph">
					Cassie's About Me goes here.
				</p>
      </div>
    );
  }
}

export default AboutPage;
