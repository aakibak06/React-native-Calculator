/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import Main from './src/CalculatorApp/Main';
import CalcApp from './src/CalculatorApp/CalcApp';

AppRegistry.registerComponent(appName, () => Main);
