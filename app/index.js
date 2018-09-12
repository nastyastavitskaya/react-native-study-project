import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',

  $white: '#ffffff',
});

export default () => <Home />;
