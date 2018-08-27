import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Event from './Event';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Event: {
      screen: Event
    }
  },
  {
    headerMode: 'screen'
  }
);
