import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as posterActions from '../../actions/posterActions';
import PosterList from './PosterList';

class PostersPage extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

	render() {
    const {posters} = this.props;

    return (
      <div className="poster-list-container">
        <PosterList posters={posters}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posters: state.posters
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(posterActions, dispatch)
  };
}

PostersPage.propTypes = {
  posters: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostersPage);
