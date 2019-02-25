import React from 'react';
// import { Image, View, ScrollView, Text, Button, StyleSheet, Platform } from 'react-native';
import { Text, Root, Container, Content, Header, Left, Button, Icon, Body, Title } from "native-base";
import {
    createDrawerNavigator,
    DrawerItems, SafeAreaView
} from 'react-navigation';
import Screen3 from '../screens/screen3';
import { DashboardStackNavigator, screen1StackNavigator, screen2StackNavigator } from './navigation3';
import SideBar from '../screens/sidebar/index';


// const SideBar = () => (
//   <Container>
//     <Content>
//       <Text>Text</Text>
//     </Content>
//   </Container>
// );

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardStackNavigator,
    Screen1: screen1StackNavigator,
    Screen2: screen2StackNavigator,
    Screen3: Screen3
},
{
    contentComponent: props => <SideBar {...props} />,
    initialRouteName: 'Dashboard',
    // drawerWidth: 200
 });

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#334333'
//     },
//     drawerItems: {
//         backgroundColor: '#ffffff',
//     }
//   });

module.exports = AppDrawerNavigator;