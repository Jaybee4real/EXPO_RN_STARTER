/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Reactotron from 'reactotron-react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  console.tron = Reactotron.log;
}

AppRegistry.registerComponent(appName, () => App);
