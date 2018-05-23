import React from 'react';
import PropTypes from 'prop-types';

import CompanyPageComponent from './CompanyPage';

class CompanyPageContainer extends React.Component {
  static navigationOptions = {
    title: 'Company Info',
  };
  render() {
    const company = this.props.navigation.state.params.company;
    return <CompanyPageComponent {...this.props} company={company} />;
  }
}

export default CompanyPageContainer;
