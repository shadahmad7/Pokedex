import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { Navigator } from './navigator/Navigator';
import { Tabs } from './navigator/Tabs';
 const App = () => {
    return (
      <NavigationContainer>
        {/* <Navigator /> */}
        <Tabs />
        </NavigationContainer>
    )
}

export default App;