import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-header">About</h1>
				<p class="about-me-paragraph">
					Born and raised in Washington DC, I attended UVA from 2007-2011 and obtained a B.S. in Systems & Information Engineering.
					After college I went to work for The Health Management Academy, an executive-focused health care consulting company based in
					Alexandria, VA. My career there began as a research analyst, working mostly on compiling and analyzing our company's survey data.
					Over time I worked on a number of technology projects, including implementing the company’s first CRM and mobile application.
					I was also part of a two-man team that in two months’ time was able to stand up a Wordpress app that was used by top executives
					of the largest health systems in the country. Our team saved the company an estimated $85k by taking on the full implementation work,
					and by using open source technology to build our platform. I eventually was promoted to be the IT Systems Manager, and was the primary
					admin for all of our company’s SaaS platforms, including our Oracle CRM and Eloqua marketing platform.
				</p>
				<p class="about-me-paragraph">
					Wanting to improve my technical prowess, I decided to attend General Assembly's part-time Back End Web Development course
					at their DC campus. It gave me a taste of what it is like to develop a web application from the ground up. I loved being able to have
					control over all aspects of an application, from the layouts and UI to the routing and database relationships.
				</p>
				<p class="about-me-paragraph">
					This exposure to app development ignited a real spark of interest in me, and after about a year of self-taught and on-the-job training,
					I moved out to San Francisco to enroll in a 12-week Web Development Immersive program at General Assembly, where I strengthened my
					programming skills by learning how to use the latest web development frameworks and tools in the industry. I have a particular interest
					in front-end Javascript frameworks like Angular and React, working on real-time data problems, and doing data modeling and visualization.
					I'm excited to continue learning as I search for jobs that will test my skills and push me to become the best programmer I can be.
				</p>
				<p class="about-me-paragraph">
					In my free time I love to hike, see live music, and tinker with Arduino kits and my 3D printer.
				</p>
      </div>
    );
  }
}

export default AboutPage;
