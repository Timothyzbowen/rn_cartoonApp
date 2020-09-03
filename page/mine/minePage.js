import React, {useState} from 'react'
import {
  StyleSheet,
  RefreshControl,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { Heading1, Paragraph } from './WidghtText'
import MineItemCell from './MineItemCell';
import { WhiteSpace } from '@ant-design/react-native';
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
const catePage = () => {
  const [state, setState] = useState({ isRefreshing: false })
  const onHeaderRefresh = () => {
    setState({isRefreshing: true})
    setTimeout(() => {
      setState({isRefreshing: false})
    }, 2000);
  }
  const renderCells = () => {
    let cells = []
    let dataList = getDataList()
    for (let i = 0; i < dataList.length; i++) {
      let sublist = dataList[i]
      for (let j = 0; j < sublist.length; j++) {
          let data = sublist[j]
          let cell = <MineItemCell image={data.image} title={data.title} subtitle={data.subtitle}
            key={data.title}/>
          cells.push(cell)
      }
      cells.push(<WhiteSpace key={i}/>)
    }

    return (
      <View style={{flex: 1}}>
        {cells}
      </View>
    )
  }
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.topContainer}>
          <TouchableOpacity>
            <Image style={[styles.icon, {marginRight: 15}]}
              source={require('../../assets/img/mine/icon_navigation_item_message_white.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={[styles.icon, {marginRight: 10}]}
              source={require('../../assets/img/mine/icon_navigation_item_set_white.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.userContainer}>
          <Image style={styles.avatar} source={require('../../assets/img/mine/avatar.png')}/>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Heading1 style={{color: 'white'}}>张博文</Heading1>
              <Image style={{marginLeft: 4}}
                source={require('../../assets/img/mine/beauty_technician_v15.png')}/>
            </View>
            <Paragraph style={{color: 'white', marginTop: 4}}>个人信息</Paragraph>
          </View>
        </View>
      </View>
    )
  }
  const getDataList = () => {
    return (
      [
        [
          {title: '我的钱包', subtitle: '办信用卡', image: require('../../assets/img/mine/icon_mine_wallet.png')},
          {title: '余额', subtitle: '￥0.00', image: require('../../assets/img/mine/icon_mine_balance.png')},
          {title: '抵用券', subtitle: '63', image: require('../../assets/img/mine/icon_mine_voucher.png')},
          {title: '会员卡', subtitle: '2', image: require('../../assets/img/mine/icon_mine_membercard.png')}
        ],
        [
          {title: '好友去哪', image: require('../../assets/img/mine/icon_mine_friends.png')},
          {title: '我的评价', image: require('../../assets/img/mine/icon_mine_comment.png')},
          {title: '我的收藏', image: require('../../assets/img/mine/icon_mine_collection.png')},
          {title: '会员中心', subtitle: 'v15', image: require('../../assets/img/mine/icon_mine_mineorder.png')},
          {title: '积分商城', subtitle: '好礼已上线', image: require('../../assets/img/mine/icon_mine_member.png')}
        ],
        [
          {title: '客服中心', image: require('../../assets/img/mine/icon_mine_member.png')},
          {title: '关于作者', subtitle: '我要合作', image: require('../../assets/img/mine/icon_mine_aboutmeituan.png')}
        ]
      ]
    )
  } 
  return (
    <View style={styles.container}>
      <View style={{
        position: 'absolute',
        width: screenWidth,
        height: screenHeight / 2,
        backgroundColor: '#06C1AE'
      }}/>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={state.isRefreshing}
            onRefresh={() => onHeaderRefresh()}
            tintColor='gray'
          />
        }>
        {renderHeader()}
        <WhiteSpace />
        {renderCells()}
      </ScrollView>
    </View>
  )
}

export default catePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#06C1AE',
    paddingBottom: 20
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 7,
  },
  icon: {
    width: 27,
    height: 27,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  }
});