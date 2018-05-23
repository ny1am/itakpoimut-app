import { View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

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
    const { navigation, dispatch, loggedUser } = this.props;
    return (
      <Container>
        <View style={styles.container}>
          <Drawer>
            {loggedUser && (
              <Drawer.Header
                style={{
                  container: {
                    backgroundColor: 'white',
                  },
                  contentContainer: {
                    backgroundColor: 'white',
                  },
                }}
              >
                <Drawer.Header.Account
                  style={{
                    container: {
                      backgroundColor: 'rgba(0, 74, 128, 0.22)',
                    },
                  }}
                  avatar={
                    <Avatar
                      image={
                        <Image
                          style={{ width: 50, height: 50, borderRadius: 25 }}
                          source={{ uri: loggedUser.picture_url }}
                        />
                      }
                    />
                  }
                  footer={{
                    dense: true,
                    centerElement: {
                      primaryText: `${loggedUser.fname} ${loggedUser.lname}`,
                      secondaryText: loggedUser.email,
                    },
                  }}
                />
              </Drawer.Header>
            )}
            <Drawer.Section
              divider
              items={[
                {
                  icon: 'bookmark-border',
                  value: 'landing',
                  onPress: () => navigation.navigate('landing'),
                },
                {
                  icon: 'today',
                  value: 'companies',
                  onPress: () => navigation.navigate('companies'),
                },
                ...(!loggedUser
                  ? [
                      {
                        icon: 'menu',
                        value: 'login',
                        onPress: () => navigation.navigate('login'),
                      },
                    ]
                  : []),
              ]}
            />
            {loggedUser && (
              <Drawer.Section
                divider
                items={[
                  {
                    icon: 'bookmark-border',
                    value: 'logout',
                    onPress: () => dispatch({ type: 'LOGOUT' }),
                  },
                ]}
              />
            )}
          </Drawer>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggedUser: auth.loggedUser,
});

export default connect(mapStateToProps)(DrawerSpec);
