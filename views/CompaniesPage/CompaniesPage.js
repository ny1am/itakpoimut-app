import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Avatar } from 'react-native-material-ui';

import styles from './styles';

export default class CompaniesPage extends React.Component {
  render() {
    const { companies, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        {companies &&
          companies.length > 0 &&
          companies.map((company, index) => (
            <View
              key={company._id}
              style={[
                styles.item,
                index === companies.length - 1 && styles.last,
              ]}
            >
              <Avatar
                image={
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: company.img }}
                    resizeMode="contain"
                  />
                }
              />
              <View style={styles.info}>
                <Text
                  style={styles.title}
                  onPress={() => navigation.navigate('company', { company })}
                >
                  {company.title}
                </Text>
                <Text style={styles.description}>{company.description}</Text>
              </View>
              <View style={[styles.loyaltyMark, styles[company.loyalty]]} />
            </View>
          ))}
      </ScrollView>
    );
  }
}
