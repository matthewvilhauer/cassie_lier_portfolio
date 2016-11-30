// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Sidebar from './common/Sidebar';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-4">
					<Sidebar/>
				</div>
				<div className="col-sm-8">
					{this.props.children}
				</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
