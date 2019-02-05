import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TextInput } from "react-native";
import { Button } from 'react-native';
import * as data from './userjson.json';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
// import {HomeScreen} from './screens/HomeScreen';


class LoginScreen extends React.Component {
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
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' })
          ],
        }))
      } else {
        alert("Login Failed");
      }
    });
  };

  render() {
    return (
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
    );
  }
}


class HomeScreen extends React.Component {
  state = {
    image: require('./assets/image.jpg')
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        </Text>
        <Image
          source={this.state.image}
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
}, {
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
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
