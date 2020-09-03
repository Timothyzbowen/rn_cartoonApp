import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Heading2, Paragraph } from './WidghtText'

const MineItemCell = (props) => {
  let icon = null;
  if (props.image) {
    icon = <Image style={styles.icon} source={props.image} />
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.content, props.style]}>
            {icon}
            <Heading2>{props.title}</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <Paragraph style={{ color: '#999999' }}>{props.subtitle}</Paragraph>
            <Image style={styles.arrow} source={require('../../assets/img/cell_arrow.png')} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MineItemCell

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
  },
  content: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 10,
  },
  icon: {
      width: 25,
      height: 25,
      marginRight: 10,
  },
  subtitleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  arrow: {
      width: 14,
      height: 14,
      marginLeft: 5,
  }
});