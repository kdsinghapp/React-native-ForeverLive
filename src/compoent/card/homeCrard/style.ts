import { StyleSheet, Dimensions } from 'react-native';
import font from '../../../theme/font';
 
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,marginHorizontal:11 
  },
  welcomeText: {
    fontSize: 20,
     color: '#000',
     fontFamily:font.PoppinsBold
  },
  userName: {
    fontSize: 14,
    color: 'black',
     fontFamily:font.PoppinsRegular

  },
  profileImage: {
    width: 33,
    height: 33,
    resizeMode:"contain"
   },
  grid: {
    paddingBottom: 40,
    paddingHorizontal: 1, // add this
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F5EDFF',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
     flex: 1, // allow flexible width inside FlatList
    margin: 8, // gives spacing around the card,
   },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
     marginBottom: 5,
     padding:40
   },
  iconImage: {
    width: 45,
    height: 45,resizeMode:"contain"
  },
  cardText: {
    fontSize: 14,
  color: 'black',
  width: 100, // or flex: 1 if inside a flex row
  lineHeight: 18, 
  fontWeight:"500",
  textAlign:"center"
   },
  arrowContainer: {
   flexDirection:"row",justifyContent:"space-between" ,
   flex:1,
   alignItems:"center"
  },
  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode:"cover",
    left:1
   },
});

export default styles;
