import React from 'react';

import {Provider} from 'react-redux';
import store from './store';
import {colors} from './utils/colors';
import {StatusBar} from 'react-native';

import Route from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primaryBlue}/>
      <Provider store={store}>
        <Route />
      </Provider>
    </>
  );
};

export default App;
