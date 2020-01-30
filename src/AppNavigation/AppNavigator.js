import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {AddDataScene, MainScene} from '../scenes';

const navigationOptions = title => {
  if (!!title) {
    return {
      title,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }
  return {header: null};
};

const AppNavigatorStack = createStackNavigator(
  {
    AddDataScene: {
      screen: AddDataScene,
      navigationOptions: navigationOptions(),
    },
    MainScene: {
      screen: MainScene,
      navigationOptions: navigationOptions(),
    },
  },
  {
    initialRouteName: 'MainScene',
    headermode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppNavigator = createAppContainer(AppNavigatorStack);

export default AppNavigator;
