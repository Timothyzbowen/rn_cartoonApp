import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
const BriefContent = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.brief}</Text>
    </View>
  )
}

export default BriefContent

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});
