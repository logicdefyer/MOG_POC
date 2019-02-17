import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import SliderScreen from '../screens/slider';
import WelcomeScreen from '../screens/login';
import AppDrawerNavigator from './navigation2';

const AppSwitchNavigator = createSwitchNavigator({
    Slider:{screen: SliderScreen},
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});
  
const AppContainer = createAppContainer(AppSwitchNavigator);

module.exports = AppContainer;