import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
// Import any container components
import Nav from './common/Nav';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps)(App);
