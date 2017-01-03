import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div>
			<div className="top-heading">
				<img className="logo" src="/images/crane_drawing.jpg" alt=""/>
				<h2 className="logo-name">Cassie Lier</h2>
			</div>
			<div className="nav-link-container">
				<IndexLink to="/" className="nav-link" activeClassName="active">Illustrations</IndexLink>
				<Link to="/posters" className="nav-link" activeClassName="active">Posters</Link>
				<Link to="/projects" className="nav-link" activeClassName="active">Other Art</Link>
				<Link to="/about" className="nav-link" activeClassName="active">About</Link>
				<Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
			</div>
    </div>
  );
};

export default Header;
