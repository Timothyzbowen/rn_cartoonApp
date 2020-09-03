import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigator from './page/root/rootPage'
import BriefPage from './page/brief/BriefPage' 
import ImgPage from './page/brief/ImgPage'
import ListPage from './page/cate/ListPage'

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" mode="modal" initialRouteName="BottomNavigator">
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Brief" component={BriefPage} />
      <Stack.Screen name="ImgPage" component={ImgPage} />
      <Stack.Screen name="ListPage" component={ListPage} />
    </Stack.Navigator>
  </NavigationContainer>
)
 
export default App;
