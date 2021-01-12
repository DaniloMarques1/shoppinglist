import React, {useState, useEffect} from 'react';

import {
  List
} from './styles';

import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {recoveryList} from '../../store/actions';

function RenderList({item, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
}

function SavedLists({navigation}) {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getAllListsSaves() {
      try {
        const keys = await AsyncStorage.getAllKeys();
        setLists(keys);
      } catch(e) {
        //TODO alert
        console.log(e);
      }
    }

    getAllListsSaves();
  }, []);

  async function handleRecovery(item) {
    try {
      const jsonList = await AsyncStorage.getItem(item);
      dispatch(recoveryList(JSON.parse(jsonList)));
      navigation.navigate("ListCategories");
    } catch(e) {
      //TODO alert
      console.log(e);
    }
  }

  return (
    <List
      data={lists}
      keyExtractor={item => String(lists.indexOf(item))}
      renderItem={({item}) => (
        <RenderList item={item} onPress={handleRecovery} />
      )}
    />
  );
}

export default SavedLists;
