import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CompaniesPageComponent from './CompaniesPage';
import { search } from '../../actions/companies';

class CompaniesPageContainer extends React.Component {
  static navigationOptions = {
    title: 'Companies',
  };
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    return <CompaniesPageComponent {...this.props} />;
  }
}

const mapStateToProps = ({ companies }) => ({
  companies: companies.companies,
});

const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(search()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CompaniesPageContainer
);
