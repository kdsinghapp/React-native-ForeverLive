import { StyleSheet, Dimensions, Platform } from 'react-native';
import font from '../../../theme/font';

const { width } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 20,
     marginBottom: 20,
    color: '#101828',
    marginHorizontal:15,
    marginTop:20 ,
    fontFamily:font.PoppinsBold
  },
  listContainer: {
    paddingBottom: 20,
  },
  shadowWrapper: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 11,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '#ccc',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        overflow: 'visible',
      },
      android: {
     shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,

        
        
 
      },
    }),

  },
  card: {
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 16,
    minHeight: 70,
    justifyContent: 'center',
  },
  gradientCard: {
    borderRadius: 16,
    // padding: 16,
     justifyContent: 'center',
    overflow: 'hidden',
   },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:11,
    
   },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:16
   },
  iconStyle: {
    height: 28,
    width: 28,
    marginRight: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#101828',
  },
});

export default styles;
