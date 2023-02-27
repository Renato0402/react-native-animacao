import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 90,
    width: Dimensions.get("window").width,
    paddingLeft: 60,
    marginVertical:50
  },
  image: {
    height: '100%',
    width: 150,
    marginHorizontal: 15,
  }
})