import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, Button, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Icon } from 'native-base';

import * as data from '../../userjson.json';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      selected: "key1"
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
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
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <View style={styles.container}>
        //   <View style={styles.inner_container}>
        //     <TextInput
        //       placeholder="Username"
        //       value={this.state.username}
        //       onChangeText={this.placeNameChangedHandler}
        //     />
        //   </View>
        //   <View style={styles.inner_container}>
        //     <TextInput
        //       secureTextEntry={true}
        //       placeholder="Password"
        //       value={this.state.password}
        //       onChangeText={this.passChangedHandler}
        //     />
        //   </View>
        //   <View  style={styles.inner_container}>
        //     <Button
        //       title="Login"
        //       onPress={this.placeSubmitHandler}
        //     />
        //   </View>
        // </View>
        // </View>
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            </Item>
            <Item >
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
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