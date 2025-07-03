import { Dimensions, StyleSheet, Platform } from 'react-native';
import font from '../../../theme/font';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    width,
    height,
  },
  image: {
    width: '100%',
    height: height * 0.65, // better proportion for all screens
  },
  textContainer: {
    marginTop: height * 0.03,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.065,
    color: 'black',
    textAlign: 'center',
    fontFamily: font.PoppinsBold,
    marginBottom: height * 0.01,
  },
  description: {
    fontSize: width * 0.04,
    color: '#000000',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? undefined : font.PoppinsRegular,
    paddingHorizontal: width * 0.05,
    lineHeight: width * 0.06,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },
  dot: {
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.012,
  },
  activeDot: {
    backgroundColor: '#000',
    width: width * 0.045,
  },
  inactiveDot: {
    backgroundColor: '#bbb',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: height * 0.05,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    height: height * 0.09,
    width: width * 0.13,
    resizeMode: 'contain',
    marginBottom: height * 0.015,
  },
  arrowImage: {
    height: height * 0.07,
    width: height * 0.07,
    resizeMode: 'contain',
  },
});

export default styles;
