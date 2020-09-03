import React from 'react'
import {StyleSheet, View, Image} from 'react-native';
import ListViewCom from '../com/ListViewCom';
import {Carousel} from '@ant-design/react-native'
const homePage = (props) => {
  return (
    <View>
      <Carousel
        style={styles.wrapper}
        selectedIndex={2}
        autoplay
        infinite
      >
        <View style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
          <Image
            style={{width: '100%', height: 200}}
            resizeMode="cover"
            source={require('../../assets/img/swiper1.jpg')}></Image>
        </View>
        <View style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
          <Image
            style={{width: '100%', height: 200}}
            resizeMode="cover"
            source={require('../../assets/img/swiper2.jpg')}></Image>
        </View>
        <View
          style={[styles.containerHorizontal, {backgroundColor: 'yellow'}]}>
          <Image
            style={{width: '100%', height: 200}}
            resizeMode="cover"
            source={require('../../assets/img/swiper3.jpg')}></Image>
        </View>
      </Carousel>
      <ListViewCom navigation={props.navigation}></ListViewCom>
    </View>
  )
}

export default homePage

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});