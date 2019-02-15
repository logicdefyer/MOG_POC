import React from 'react';
import { Image } from 'react-native';
import {
    createDrawerNavigator
} from 'react-navigation';

import { DashboardStackNavigator, screen1StackNavigator, screen2StackNavigator } from './navigation3';

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: DashboardStackNavigator,
    Screen1: screen1StackNavigator,
    Screen2: screen2StackNavigator
});

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../assets/image.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
      );
    }
}

module.exports = AppDrawerNavigator;