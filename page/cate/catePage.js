import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import pxSize from '../../assets/js/pxSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
const catePage = (props) => {
  const [state, setState] = useState({
    arr:[
        '爆笑喜剧',
        '少年热血',
        '武侠格斗',
        '少女爱情',
        '恐怖灵异',
        '侦探推理',
        '科幻魔幻',
        '竞技体育',
        '其它漫画'
    ]
  })
  let imgPath='http://10.0.2.2:3000/img/cate';
  let {navigation} = props;
  return (
    <View style={styles.container}>
      {
        state.arr.map((item,i)=>{
          let pathStr = imgPath+(i+1)+".jpg";
          return (
            <TouchableOpacity key={i} onPress={()=>{navigation.navigate('ListPage',{category:item})}}>
              <View 
                style={{width:pxSize(750/3),height:pxSize(280),justifyContent:'center',alignItems:"center"}} 
              >
                <Image 
                  style={{width:pxSize(180),height:pxSize(180)}}
                  borderRadius={10} 
                  source={{uri:pathStr}}></Image>
                <Text style={{padding: 10}}>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default catePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: 'center',
    alignContent:"center",
    alignItems: 'center',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  }
});