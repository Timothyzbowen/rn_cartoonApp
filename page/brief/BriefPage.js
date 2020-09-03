import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import pxSize from '../../assets/js/pxSize';
import MenuContent from './MenuContent'
import BriefContent from './BriefContent'
const BriefPage = ({route, navigation}) => {
  const [state, setState] = useState({
    imgPath: 'http://10.0.2.2:3000/img/bookimg/',
    isBrief: true,
  })
  let book = route.params.book;
  let imgUrl = state.imgPath + book.imgInfo.imgid + '.jpg';
  return (
    <View style={styles.container}>
      <View
        style={{
          width: pxSize(750),
          justifyContent: 'center',
          height: pxSize(100),
          borderColor: '#ccc',
          borderBottomWidth: 1,
          borderStyle: 'solid',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', paddingHorizontal: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text> &lt; 返回</Text>
          <Text> &nbsp; {book.bookTitle}</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: pxSize(400)}}>
        <Image
          blurRadius={8}
          style={{
            opacity: 0.5,
            width: pxSize(750),
            height: pxSize(400),
            left: 0,
            top: 0,
            position: 'absolute',
          }}
          resizeMode="cover"
          source={{uri: imgUrl}}
        />
        <View
          style={{
            height: pxSize(400),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            style={{width: pxSize(252), height: pxSize(336)}}
            resizeMode="cover"
            source={{uri: imgUrl}}
          />
          <View
            style={{width: pxSize(252), height: pxSize(336), marginLeft: 30}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                paddingTop: 30,
                paddingBottom: 20,
              }}>
              {book.bookTitle}
            </Text>
            <Text style={{marginVertical: 5}}>漫画类型： {book.type}</Text>
            <Text>漫画作者：{book.anthor}</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={{width: pxSize(750), flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.btn, styles.center]}
            onPress={() => {
              setState(pre => ({...pre, isBrief: true}));
            }}>
            <Text>详情</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.center]}
            onPress={() => {
              setState(pre => ({...pre, isBrief: false}));
            }}>
            <Text>目录</Text>
          </TouchableOpacity>
        </View>
        <View>
          {state.isBrief ? (
            <BriefContent brief={book.brief} />
          ) : (
            <MenuContent navigation={navigation} book={book} />
          )}
        </View>
      </View>
    </View>
  )
}

export default BriefPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: pxSize(375),
    height: pxSize(80),
    borderBottomWidth: 1,
  },
});