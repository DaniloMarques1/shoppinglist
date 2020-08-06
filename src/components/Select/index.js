import React from 'react';

import {Picker} from '@react-native-community/picker';
import Category from '../../utils/category';

function Select({selectedValue, onChange}) {
  return (
    <>
      <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label="SELECIONE UMA CATEGORIA" value="" />
        <Picker.Item label={Category.BEEF} value="beef" />
        <Picker.Item label={Category.CLEANING} value="cleaning" />
        <Picker.Item label={Category.ALIMENT} value="aliment" />
        <Picker.Item label={Category.DRINK} value="drink" />
        <Picker.Item label={Category.FROZEN} value="frozen" />
        <Picker.Item label={Category.DESSERT} value="dessert" />
        <Picker.Item label={Category.FLAVORING} value="flavoring" />
        <Picker.Item label={Category.OTHERS} value="others" />
      </Picker>
    </>
  );
}

export default Select;
