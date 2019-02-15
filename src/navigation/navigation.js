import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/login';
import AppDrawerNavigator from './navigation2';

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});
  
const AppContainer = createAppContainer(AppSwitchNavigator);

module.exports = AppContainer;