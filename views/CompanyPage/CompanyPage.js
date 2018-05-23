import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class CompanyPage extends React.Component {
  render() {
    const { company } = this.props;
    return (
      <View style={styles.container}>
        {company && <Text>{company._id}</Text>}
      </View>
    );
  }
}
