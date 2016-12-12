import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProjectsPage from './components/project/ProjectsPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsPage} />
    <Route path="about" component={AboutPage}/>
  </Route>
);
