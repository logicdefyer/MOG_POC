import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Icon, Picker, Form,Right,Left,Button  } from "native-base";
import { Image } from "react-native";


const cardImage = require("../../assets/drawer-cover.png");
export default class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Content padder>
        <Card>
        <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button success style={{textAlign:"center"}}>
                  <Text>Activated</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Text>View Offer</Text>
                </Button>
              </Body>
              <Right>
              <Button danger transparent>
                <Icon active type="MaterialIcons" name="access-alarm" />
                <Text>11h left</Text>
              </Button>
              </Right>
            </CardItem>
        </Card>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
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
        </Form>
      </Content>
    );
  }
}

