import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import ListItems from './pages/ListItems';
import {colors} from './utils/colors'

const Stack = createStackNavigator();

const style = {
  headerStyle: {
    backgroundColor: colors.primaryBlue
  },
  headerTintColor: colors.primaryWhite,
  headerTitleStyle: {fontWeight: 'bold'}
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={style}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ListItems"
          component={ListItems}
          options={{title:"Lista de compras"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
