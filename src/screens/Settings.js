import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput } from 'react-native';

export default class Settings extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Log Out"
                onPress={() => {
                  this.props.navigation.navigate('Welcome')}
                }
              />
          </View>
        );
      }
  }

const styles = StyleSheet.create({

});