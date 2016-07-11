import {
  AppRegistry,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';

import {Facebook} from 'exponent';
import React from 'react';

async function logIn() {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '100506880388601', {
        permissions: ['public_profile'],
      });
  } catch (e) {
    console.log('fuck! ', e);
  }
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }
}

const App = React.createClass ({

  getInitialState() {
    console.log('getting initial state');
    return {accessToken: null};
  },

  _onPressOpen() {
    fetch('http://208.90.212.25:5000/debug', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: this.state.accessToken,
      }),
    }).done((response) => {
      console.log('resonpse: ', response);
    });
  },

  _logIn() {
    console.log('in _logIn');
    Facebook.logInWithReadPermissionsAsync(
      '100506880388601',
      {
        permissions: ['public_profile'],
      }
    ).done((response) => {
      this.setState({accessToken: response.token});
    });
  },

  render() {
    if (!this.state.accessToken) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight onPress={this._logIn}>
            <Text style={{ fontSize: 56, backgroundColor: 'blue', color: 'white' }}>
              Log in, bitch!
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableHighlight onPress={this._onPressOpen}>
          <Text style={{ fontSize: 56, backgroundColor: 'red', color: 'white' }}>
            Press me, bitch!
          </Text>
        </TouchableHighlight>
      </View>
    );
  },
});

AppRegistry.registerComponent('main', () => App);
