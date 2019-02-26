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
  Fab,
  Text,
  IconNB,
  View
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
        this.state = {
            active: false
          };
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
                    <Title> My Account</Title>
                </Body>
                <Right />
                </Header>

                <Tabs initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                <Tab
                    heading={<TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle}><Icon type="MaterialIcons" name="local-play" /><Text>Offers</Text></TabHeading>}>
                    <TabOne/>
                </Tab>
                <Tab
                    heading={<TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}><Icon type="MaterialIcons" name="shopping-basket" /><Text>Favourites</Text></TabHeading>}>
                    <TabTwo/>
                </Tab>
                <Tab
                    heading={<TabHeading style={this.state.currentTab === 2 ? styles.activeTabStyle : styles.tabStyle}><Icon type="MaterialIcons" name="event" /><Text>Interests</Text></TabHeading>}>
                    <TabThree/>
                </Tab>
                </Tabs>

                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: "#5067FF" }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}
                >
                    <IconNB name="md-share" />
                </Fab>

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
