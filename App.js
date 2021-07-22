import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {store, persistor} from './store';
import Root from './src/components/screens/root';
import colors from './src/components/styles/colors';
import Fonts from './src/components/styles/fonts';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
  },
  fonts: {
    regular: Fonts.fontFamily.regular,
    medium: Fonts.fontFamily.medium,
    light: Fonts.fontFamily.light,
    bold: Fonts.fontFamily.bold,
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </PaperProvider>
  </Provider>
);

export default App;
