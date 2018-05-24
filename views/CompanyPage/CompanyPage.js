import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import styles from './styles';

const labels = {
  disloyal: 'Порушник',
  probation: 'Випробувальний',
  loyal: 'Лояльна',
};

export default class CompanyPage extends React.Component {
  render() {
    const { company } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: company.img }}
          />
        </View>
        <View style={[styles.loyaltyWrapper, styles[company.loyalty]]}>
          <Text style={styles.loyalty}>{labels[company.loyalty]}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{company.title}</Text>
          <Text style={styles.description}>{company.description}</Text>
        </View>
      </View>
    );
  }
}
