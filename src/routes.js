import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProjectsPage from './components/project/ProjectsPage';
import IllustrationsPage from './components/illustration/IllustrationsPage';
import PostersPage from './components/poster/postersPage';
import threeDPage from './components/threeD/threeDPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IllustrationsPage} />
		<Route path="projects" component={ProjectsPage}/>
		<Route path="posters" component={PostersPage}/>
		<Route path="3D" component={threeDPage}/>
    <Route path="about" component={AboutPage}/>
		<Route path="contact" component={ContactPage}/>
  </Route>
);
