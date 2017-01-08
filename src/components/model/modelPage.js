import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelActions from '../../actions/modelActions';
import ModelList from './modelList';

class ModelPage extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

	render() {
    const {models} = this.props;

    return (
      <div className="model-list-container">
        <ModelList models={models}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    models: state.models
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modelActions, dispatch)
  };
}

ModelPage.propTypes = {
  models: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelPage);
