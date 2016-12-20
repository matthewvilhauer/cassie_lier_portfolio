import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Sidebar = () => {
  return (
  	<div className="sidebar-container">
				<h1>Cassie Lier</h1>
				<h3><IndexLink to="/" activeClassName="active">Projects</IndexLink></h3>
				<h3><Link to="/about" activeClassName="active">About</Link></h3>
				<h3><Link to="/contact" activeClassName="active">Contact</Link></h3>
		</div>
  );
};

export default Sidebar;
