import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as illustrationActions from '../../actions/illustrationActions';
import IllustrationList from './IllustrationList';

class IllustrationsPage extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

	render() {
    const {illustrations} = this.props;

    return (
      <div className="illustration-list-container">
        <IllustrationList illustrations={illustrations}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    illustrations: state.illustrations
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(illustrationActions, dispatch)
  };
}

IllustrationsPage.propTypes = {
  illustrations: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(IllustrationsPage);
