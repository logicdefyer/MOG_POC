import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput } from 'react-native';

export default class Profile extends Component {
    state = {
        image: require('../../assets/image.jpg')
      };
      render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={this.state.image}
            />
            <Text>Profile</Text>
          </View>
        );
      }
  }

const styles = StyleSheet.create({

});