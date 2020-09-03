import React, { useState }from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ListView} from '@ant-design/react-native';

const MenuContent = (props) => {
  const [state, setState] = useState({
    layout: 'list',
    imgPath: 'http://10.0.2.2:3000/img/bookimg/',
    articleList: [],
  })
  const onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageLimit = 20;
      let rowData = [];
      let httpUrl = `http://10.0.2.2:3000/articleList?bookTitle=${props.book.bookTitle}&page=${page}`;
      let res = await fetch(httpUrl);
      rowData = await res.json();
      state.articleList = rowData;
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); 
    }
  };
  const renderItem = (item, index) => {
    let {navigation, book} = props;
    return (
      <TouchableOpacity
        style={[style.flexRow, {marginTop: 10}]}
        onPress={() => {
          navigation.navigate('ImgPage', {
            book: book,
            article: item,
            index: index,
            articleList: state.articleList,
          });
        }}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderColor: '#000',
              borderWidth: 1,
              borderStyle: 'solid',
            }}>
            {item.articleNum}
          </Text>
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
      numColumns={3}
      allLoadedText="end"
    />
  )
}

export default MenuContent
export const title = 'ListView';
export const description = 'ListView Example';

let style = StyleSheet.create({
  flexRow: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
});