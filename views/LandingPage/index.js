import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class LandingPage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={styles.img}
            source={require('./landing.png')}
            resizeMode="cover"
          />
          <View style={styles.centered}>
            <Text style={styles.paragraph}>
              База компаній {'\n'} громадської {'\n'} ініціативи
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            "И так поймут" Каталог ЗМІ та бізнесу
          </Text>
          <Text style={styles.sectionBody}>
            Це сервіс, де можна перевірити, чи компанія обслуговує своїх
            клієнтів українською мовою: чи має україномовний сайт, інструкції,
            етикетки, різні супровідні документи та навіть сторінки у
            соцмережах.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Шукайте компанії за назвою</Text>
          <Text style={styles.sectionBody}>
            Якщо ви знаєте назву компанії і хочете перевірити її лояльність,
            скористайтесь пошуком за назвою компанії. Для цього введіть у поле
            пошуку кілька перших букв назви й оберіть потрібну компанію із
            запропонованих нашим розумним пошуком варіантів.
          </Text>
        </View>
        <View style={[styles.section, styles.last]}>
          <Text style={styles.sectionTitle}>
            Шукайте компанії за сферою діяльності
          </Text>
          <Text style={styles.sectionBody}>
            Хочете скористатись послугами певної компанії, та не знаєте, яка з
            плеяди представлених на ринку лояльна до україномовного споживача?
            Скористайтесь нашим пошуком по сферах. Оберіть сферу послуг, що вас
            цікавить, серед списку зліва на сторінці
          </Text>
        </View>
      </ScrollView>
    );
  }
}
