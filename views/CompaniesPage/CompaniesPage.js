import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class CompaniesPage extends React.Component {
  render() {
    const { companies, navigation } = this.props;
    return (
      <View style={styles.container}>
        {companies &&
          companies.length > 0 &&
          companies.map((company) => (
            <Text
              key={company._id}
              onPress={() => navigation.navigate('company', { company })}
            >
              {company._id}
            </Text>
          ))}
      </View>
    );
  }
}
