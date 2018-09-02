import { FluidNavigator as createNavigator } from 'react-navigation-fluid-transitions';
import Home from './Home';
import Details from './Details';

export default createNavigator(
  {
    Home: {
      screen: Home
    },
    Event: {
      screen: Details
    }
  },
  {
    headerMode: 'none'
  }
);
