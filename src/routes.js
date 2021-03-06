import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import SavedLists from './pages/SavedLists';
import ListCategories from './pages/ListCategories';
import AddItem from './pages/AddItem';
import ListItems from './pages/ListItems';
import UpdateItem from './pages/UpdateItem';
import {colors} from './utils/colors'

const Stack = createStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: colors.primaryBlue
  },
  headerTintColor: colors.primaryWhite,
  headerTitleStyle: {fontWeight: 'bold'}
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SavedLists"
          component={SavedLists}
          options={{title: "Listas salvas"}}
        />
        <Stack.Screen
          name="ListCategories"
          component={ListCategories}
          options={({route}) => ({title: `${route.params?.listName}`, headerLeft: null})}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={({route}) => ({title: `Adicionar ${route.params?.item ? route.params.item : 'Item'}`})}
        />
        <Stack.Screen
          name="ListItems"
          component={ListItems}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="UpdateItem"
          component={UpdateItem}
          options={({route}) => ({title: `Atualizar ${route.params?.title ? route.params.title : 'Item'}`})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
