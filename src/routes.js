import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import ListCategories from './pages/ListCategories';
import AddItem from './pages/AddItem';
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
          name="ListCategories"
          component={ListCategories}
          options={{title:"Lista de categorias"}}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{title:"Adicionar item"}}
        />
        <Stack.Screen
          name="ListItems"
          component={ListItems}
          options={{title:"Itens"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
