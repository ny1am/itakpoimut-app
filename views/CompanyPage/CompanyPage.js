import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import violationsList from '../../utils/violations';
import categoriesList from '../../utils/categories';

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
        <View style={[styles.logoWrapper, styles[company.loyalty]]}>
          <Text style={styles.loyaltyWrapper}>{labels[company.loyalty]}</Text>
          <View style={styles.logoOffset}>
            <View style={styles.logo}>
              <Image
                style={[styles.logoImg, styles[company.loyalty + 'Logo']]}
                source={{ uri: company.img }}
              />
            </View>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{company.title}</Text>
          <Text style={styles.description}>{company.description}</Text>
          {company.categories &&
            company.categories.length > 0 && (
              <View style={styles.listSection}>
                <Text style={styles.listTitle}>Сфери діяльності</Text>
                {company.categories.map((item) => (
                  <Text key={item} style={styles.listItem}>
                    {categoriesList.find((i) => i.name === item).text}
                  </Text>
                ))}
              </View>
            )}
          {company.violations &&
            company.violations.length > 0 && (
              <View style={styles.listSection}>
                <Text style={[styles.listTitle, styles.violationTitle]}>
                  Порушення
                </Text>
                {company.violations.map((item) => (
                  <Text
                    key={item.name}
                    style={[styles.listItem, styles.violationItem]}
                  >
                    {'-   '}
                    {violationsList.find((i) => i.name === item.name).text}
                  </Text>
                ))}
              </View>
            )}
        </View>
      </View>
    );
  }
}
