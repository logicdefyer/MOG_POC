import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body,Icon, Picker, Form  } from "native-base";

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
          <CardItem>
            <Body>
              <Text>NativeBase is open source and free.</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Platform specific codebase for components</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Any native third-party libraries can be included along with
                NativeBase.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Single file to theme your app and NativeBase components.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Gives an ease to include different font types in your app.
              </Text>
            </Body>
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
