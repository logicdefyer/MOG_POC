import React from 'react';
import { Image, View, ScrollView, Text, Button, StyleSheet, Platform } from 'react-native';
import {
    createDrawerNavigator,
    DrawerItems, SafeAreaView
} from 'react-navigation';

import { DashboardStackNavigator, screen1StackNavigator, screen2StackNavigator } from './navigation3';

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardStackNavigator,
    Screen1: screen1StackNavigator,
    Screen2: screen2StackNavigator
},
{
    contentComponent: (props) => (
     <SafeAreaView style={styles.container}>
        <View style={{height: 150,alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/image.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
        </View>
       <ScrollView style={styles.drawerItems}>
         <DrawerItems {...props} />
         <Button
            style={styles.logoutButton}
            title="Logout"
            onPress={() => props.navigation.navigate('Welcome') }/>
       </ScrollView>
     </SafeAreaView>
    ),
    initialRouteName: 'Dashboard',
    // drawerWidth: 200
 });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#334333',
      paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    drawerItems: {
        backgroundColor: '#ffffff',
    }
  });

module.exports = AppDrawerNavigator;