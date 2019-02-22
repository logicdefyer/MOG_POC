import React, { Component } from 'react';
import { View, Text,Image,ImageBackground, StyleSheet, TextInput ,AppRegistry, FlatList, Alert, ActivityIndicator, Platform, Picker,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input,  Icon, Button } from 'native-base';


const background = require("../../assets/pages/background.jpg");
const lockIcon = require("../../assets/pages/lock.png");
const personIcon = require("../../assets/pages/person.png");
export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selected: "IN",
      dataSource: [],
      mobile: ""
    };
  };

  mobileChangedHandler = mob => {
    this.setState({
      mobile: mob
    });
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  };

  componentDidMount() {
    var customData = require('../../countrycode.json');
    this.setState({
      isLoading: false,
      dataSource: customData
    });
  };

  placeSubmitHandler = () => {
    if (this.state.mobile.trim() === "") {
      alert("Mobile can't be blank");
      return;
    }

    this.props.navigation.navigate('Dashboard');
  };

  render() {
    let serviceItems = this.state.dataSource.map((item, i) => {
      return <Picker.Item key={i} label={item.dial_code + " " + item.code} value={item.code} />
    });

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ImageBackground 
        style={[styles.background, styles.container]} 
        source={background}
        resizeMode="cover"
      >
        <View style={styles.container} />
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={personIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.input}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              underlineColorAndroid="transparent"
            >
            {serviceItems}
            </Picker>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={lockIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Mobile"
              secureTextEntry
              style={styles.input}
              value={this.state.mobile} 
              onChangeText={this.mobileChangedHandler}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity onPress={this.placeSubmitHandler} activeOpacity={.5}>
            <View  style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}></View>
      </ImageBackground>
    );

    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    background: {
      width: '100%',
      height: '100%'
    },
    wrapper: {
      paddingHorizontal: 15,
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      backgroundColor: "transparent"
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#FFF'
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d73352"
    },
    icon: {
      width: 20,
      height: 20,
    },
    button: {
      backgroundColor: "#d73352",
      paddingVertical: 15,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18
    },
    forgotPasswordText: {
      color: "#FFF",
      backgroundColor: "transparent",
      textAlign: "center"
    }
  });