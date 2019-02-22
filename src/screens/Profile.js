import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button,Dimensions, TextInput } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      image: require('../../assets/image.jpg')
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

      render() {
        return (
          <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
            <Image style={{width: '100%', height: '100%'}}
              source={this.state.image}
            />
          </View>
        );
      }
  }

const styles = StyleSheet.create({

});