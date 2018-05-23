import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Drawer } from 'react-native-material-ui';
import Container from './Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    backgroundColor: 'white',
  },
});

class DrawerSpec extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <View style={styles.container}>
          <Drawer>
            <Drawer.Header>
              <Drawer.Header.Account
                avatar={<Avatar text="A" />}
                footer={{
                  dense: true,
                  centerElement: {
                    primaryText: 'Reservio',
                    secondaryText: 'business@email.com',
                  },
                }}
              />
            </Drawer.Header>
            <Drawer.Section
              divider
              items={[
                {
                  icon: 'bookmark-border',
                  value: 'screen 1',
                  onPress: () => navigation.navigate('screen1'),
                },
                {
                  icon: 'today',
                  value: 'screen 2',
                  onPress: () => navigation.navigate('screen2'),
                },
              ]}
            />
          </Drawer>
        </View>
      </Container>
    );
  }
}

export default DrawerSpec;
