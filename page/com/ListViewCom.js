import React, { useState } from 'react'
import { Text, View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import { ListView } from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';

const ListViewCom = (props) => {
  const [state, setState] = useState({ layout: 'list', imgPath: 'http://10.0.2.2:3000/img/bookimg/' })
  const onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageLimit = 20;
      let rowData = []
      let httpUrl = `http://10.0.2.2:3000/indexList?page=${page}`
      let res = await fetch(httpUrl)
      rowData = await res.json()
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); 
    }
  }

  const renderItem = (item) => {
    let imgUrl = state.imgPath+item.imgInfo.imgid+'.jpg';
    let { navigation } = props;
    return (
      <TouchableOpacity style={[style.flexRow,{ marginTop: 10 }]} onPress={()=>{navigation.navigate('Brief',{book:item})}}>
        <View style={{alignItems:"center"}}>
          <Image style={{width:pxSize(300),height:pxSize(400)}} resizeMode="contain" source={{uri:imgUrl}}></Image>
          <View style={{width:'100%', padding: 20,}}>
            <Text style={style.title}>{item.bookTitle}</Text>
            <Text 
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.brief}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ListView
      onFetch={onFetch}
      keyExtractor={(item, index) =>
        `${state.layout} - ${item} - ${index}`
      }
      renderItem={renderItem}
      numColumns={2}
    />
  )
}

export default ListViewCom

let style = StyleSheet.create({
  flexRow:{
    flexDirection:'column',
    flex:1,
    alignItems:"center"
  },
  title:{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:3 
  }
})
