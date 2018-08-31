// import { createStackNavigator as createNavigator } from 'react-navigation';
import { FluidNavigator as createNavigator } from 'react-navigation-fluid-transitions';
import Home from './Home';
import Event from './Event';

export default createNavigator(
  {
    Home: {
      screen: Home
    },
    Event: {
      screen: Event
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: true
    },
    headerMode: 'none'
  }
);
