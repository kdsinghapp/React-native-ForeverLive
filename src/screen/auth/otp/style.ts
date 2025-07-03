
import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils/Constant';
import font from '../../../theme/font';


const styles = StyleSheet.create({
  btn: {
    justifyContent: 'flex-start', marginBottom: 15,
    marginHorizontal: 15,

  },
  txtHeading: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: 'rgba(0, 0, 0, 1)'
  },
  textEr: { color: 'red', fontSize: 12 },

  txtsubHeading: {
     fontSize: 16,
     color: '#9DB2BF',
     fontFamily:font.PoppinsRegular ,
     marginTop:8
   },

  codeFieldRoot: { marginTop: 20, },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1.5,
    borderColor: '#F7F8F8',
    textAlign: 'center',
    color: '#000',
    borderRadius: 10,
    backgroundColor: '#F7F8F8',

  },
  focusCell: {
    borderColor: '#3658AE',
    backgroundColor: 'rgba(247, 248, 248, 1)',



  },
});
export default styles;
