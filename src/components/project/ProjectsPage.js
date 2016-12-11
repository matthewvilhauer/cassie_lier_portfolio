import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectList from './ProjectList';

class ProjectsPage extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

	render() {
    const {projects} = this.props;

    return (
      <div>
        <h1>Projects</h1>
        <ProjectList projects={projects}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
