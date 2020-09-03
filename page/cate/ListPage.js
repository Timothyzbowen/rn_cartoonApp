import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import ListViewCom from './ListViewCom'
import pxSize from '../../assets/js/pxSize'
const ListPage = ({route, navigation}) => {
  let category = route.params.category;
  return (
    <View>
      <View style={{width:pxSize(750),justifyContent:'center',height:pxSize(100),borderColor:"#ccc",borderBottomWidth:1,borderStyle:"solid"}}>
        <TouchableOpacity 
          style={{flexDirection:'row',paddingHorizontal:10}}
          onPress={()=>{navigation.goBack()}}
        >
          <Text> &lt; 返回</Text>
          <Text> &nbsp; {category}</Text>
        </TouchableOpacity>
      </View>
      <ListViewCom navigation={navigation} category={category}></ListViewCom>
    </View>
  )
}

export default ListPage
