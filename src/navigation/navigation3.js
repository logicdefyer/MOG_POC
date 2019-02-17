import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createMaterialBottomTabNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator
} from 'react-navigation';

import Icon from '@expo/vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import Detail from '../screens/Detail';
import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import WelcomeScreen from '../screens/login';

const FeedStack = createStackNavigator(
    {
      Feed: {
        screen: Feed,
    //     navigationOptions: {
    //         header: null
    // }
        navigationOptions: ({ navigation }) => {
          return {
            headerStyle: {
              backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'Home Screen',
            headerLeft: (
              <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
            )
          };
        }
      },
      Detail: {
        screen: Detail
      }
    },
    {
      defaultNavigationOptions: {
        gesturesEnabled: false
      }
    }
  );
  
  const ProfileStack = createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Profile',
          headerLeft: (
            <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });
  const SettingsStack = createStackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Settings',
          headerLeft: (
            <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });
  
  const DashboardTabNavigator = createBottomTabNavigator(
    {
      FeedStack,
      ProfileStack,
      SettingsStack
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          headerTitle: routeName
        };
      }
    }
  );
  const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (
            <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  );
  
  const screen1StackNavigator = createStackNavigator(
    {
      screen: screen1
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'screen1',
          headerLeft: (
            <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  );
  
  const screen2StackNavigator = createStackNavigator(
    {
      screen: screen2
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: '#333333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (
            <IonIcon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  );

module.exports = {
    DashboardStackNavigator: DashboardStackNavigator,
    screen1StackNavigator: screen1StackNavigator,
    screen2StackNavigator: screen2StackNavigator,
};