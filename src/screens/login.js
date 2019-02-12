import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TextInput ,AppRegistry, FlatList, Alert, ActivityIndicator, Platform} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Button } from 'native-base';

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
        <Container style={styles.MainContainer}>
        <Header />
        <Content>
          <Form style={styles.form}>
            <Item style={styles.pickeritem}>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: '100%' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            {serviceItems}
            </Picker>
            </Item>
            <Item style={styles.pickeritem}>
              <Text style={styles.txtbordr}>MOBILE</Text>
              <Input type="mobile" placeholder="Mobile" value={this.state.mobile} onChangeText={this.mobileChangedHandler} />
            </Item>
              <Button block onPress={this.placeSubmitHandler}>
                <Text>Primary</Text>
              </Button>
          </Form>
        </Content>
        </Container> 
      );
    }
  }

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  pickeritem :{
    borderLeftWidth :2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor:'#333333',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems : 'center',
    marginLeft:5,
    marginBottom:5,
    marginTop: 5,
    marginRight: 5
  },
  form: {
    marginTop: 100,
  },
  txtbordr:{
    borderRightWidth:2,
    width: '20%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  FlatListItemStyle: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    
    });