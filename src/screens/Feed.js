import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
          </View>
        );
      }
  }

const styles = StyleSheet.create({

});