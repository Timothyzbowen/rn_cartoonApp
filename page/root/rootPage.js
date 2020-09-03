import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import HomePage from '../home/homePage';
import CatePage from '../cate/catePage';
import MinePage from '../mine/minePage';

const Tab = createBottomTabNavigator()

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    if (route.name === "Home") {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/index1.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/index0.png')}
        />
      );
    }
    if (route.name === "Cate") {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/c1.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/c0.png')}
        />
      );
    }
    if (route.name === "Me") {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/me0.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/me1.png')}
        />
      );
    }
  }
})
function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen name="Home" component={HomePage} options={{title: '首页', tabBarLabel: '首页',}} />
      <Tab.Screen name="Cate" component={CatePage} options={{title: '分类', tabBarLabel: '分类',}} />
      <Tab.Screen name="Me" component={MinePage} options={{title: 'Me', tabBarLabel: 'Me',}} />
    </Tab.Navigator>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  }
});