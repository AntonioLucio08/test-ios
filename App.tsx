import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NavigatorApp} from "./src/navigator";


const App = () => {
  return(
      <NavigationContainer>
          <NavigatorApp/>
      </NavigationContainer>
  )
}


export default App;
