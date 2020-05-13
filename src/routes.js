import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

const navigationOptions = {
  title: 'JSHunt',
  headerStyle: {
    backgroundColor: '#DA552F',
  },
  headerTintColor: '#FFF',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
