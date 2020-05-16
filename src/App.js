import React from 'react';

import {View} from 'react-native';
import {colors} from './utils/colors';
import Button from './components/Button';

function App() {
  return (
    <View>
      <Button text="Salvar" color={colors.primaryBlue} icon="send" />
      <Button text="Apagar" color={colors.primaryRed} icon="delete" />
      <Button text="Editar" color={colors.primaryBlue} icon="edit" />
    </View>
  );
};


export default App;
