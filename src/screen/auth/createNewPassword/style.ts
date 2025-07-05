
import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils/Constant';

const Styles = StyleSheet.create({
  mainView:{ flex: 1, backgroundColor: '#fff' },
  redText:
    { color: "red", marginBottom: 10 },

  btnView:
  {
    justifyContent: 'flex-start', marginBottom: 15,
    marginHorizontal: 12
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },
  rowInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
    marginTop: 20
  },
  mainView: {
     flex: 1,
    marginTop: hp(4)
  },
  img:{ height: 20, width: 20 }
});;
export default Styles;
