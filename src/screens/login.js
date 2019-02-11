import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput } from 'react-native';

import * as data from '../../userjson.json';

export default class WelcomeScreen extends Component {
    state = {
      username: "",
      password: "",
      image: data.image
    };
  
    placeNameChangedHandler = user => {
      this.setState({
        username: user
      });
    };
  
    passChangedHandler = pass => {
      this.setState({
        password: pass
      });
    };
    placeSubmitHandler = () => {
      if (this.state.username.trim() === "" || this.state.password.trim() === "") {
        alert("Cant be Blank");
        return;
      }
  
      this.setState(prevState => {
        if(prevState.username===data.userName && prevState.password===data.passWord) {
          alert("Hi "+prevState.username);
          this.props.navigation.navigate('Dashboard')
        } else {
          alert("Login Failed");
        }
      });
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
          <View style={styles.inner_container}>
            <TextInput
              placeholder="Username"
              value={this.state.username}
              onChangeText={this.placeNameChangedHandler}
            />
          </View>
          <View style={styles.inner_container}>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.passChangedHandler}
            />
          </View>
          <View  style={styles.inner_container}>
            <Button
              title="Login"
              onPress={this.placeSubmitHandler}
            />
          </View>
        </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
inner_container: {
    margin: 10,
    width: 300,
    borderColor:"black",
    borderWidth: 1
},
});