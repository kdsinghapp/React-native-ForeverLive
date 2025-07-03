
import { StyleSheet } from 'react-native';
import { wp } from '../../../utils/Constant';
const Styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '700',
    color: '#3658AE',
   },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#E8442E',
    height: 55,

    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: wp(90),
  },
  sumTitle: { fontSize: 16, lineHeight: 20, color: "#909090", },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start', marginBottom: 10,
    marginHorizontal: 15,
    marginTop:8
  }
});
export default Styles;
