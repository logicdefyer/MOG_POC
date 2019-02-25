//import liraries
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

// create a component
class Screen3 extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="menu"/>
                    </Button>
                </Left>
                <Body>
                    <Title> Basic Tabs</Title>
                </Body>
                <Right />
                </Header>

                <Tabs>
                <Tab heading="Tab1">
                    <TabOne />
                </Tab>
                <Tab heading="Tab2">
                    <TabTwo />
                </Tab>
                <Tab heading="Tab3">
                    <TabThree />
                </Tab>
                </Tabs>
            </Container>
        );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default Screen3;
