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
  Body,
  TabHeading,
  Text,
} from "native-base";
import { StyleSheet } from 'react-native';
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

// create a component
class Screen3 extends Component {
    constructor(props) {
        super(props)
        this.state = { currentTab: 0 }
      }
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

                <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                <Tab
                    tabStyle={{ backgroundColor: 'red' }}
                    activeTabStyle={{ backgroundColor: 'blue' }}
                    heading={<TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle}><Icon name="list" /><Text>List</Text></TabHeading>}>
                    <TabOne/>
                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: 'red' }}
                    activeTabStyle={{ backgroundColor: 'blue' }}
                    heading={<TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}><Icon name="grid" /><Text>Grid</Text></TabHeading>}>
                    <TabTwo/>
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
const styles = StyleSheet.create({
    activeTabStyle: {
      backgroundColor: '#333333'
    },
    tabStyle: {
      backgroundColor: '#000000'
    }
  })

//make this component available to the app
export default Screen3;
