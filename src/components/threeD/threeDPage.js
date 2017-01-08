import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as threeDActions from '../../actions/threeDActions';
import threeDList from './threeDList';

class threeDPage extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

	render() {
    const {threeD_projects} = this.props;

    return (
      <div className="poster-list-container">
        <threeDList threeD_projects={threeD_projects}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    threeD_projects: state.threeD_projects
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(threeDActions, dispatch)
  };
}

threeDPage.propTypes = {
  threeD_projects: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(threeDPage);
