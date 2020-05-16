import React from 'react';

import {InputContainer} from './styles'

function Input({placeholder, type, length, value, onChangeText}) {
  return (
    <InputContainer value={value} onChangeText={onChangeText} placeholder={placeholder} maxLength={length} keyboardType={type} />
  );
}

export default Input;
