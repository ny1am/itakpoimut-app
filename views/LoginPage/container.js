import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { auth } from '../../actions/auth';
import LoginPageComponent from './LoginPage';

class LoginPageContainer extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return <LoginPageComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (...args) => dispatch(auth(...args)),
});

export default connect(null, mapDispatchToProps)(LoginPageContainer);
