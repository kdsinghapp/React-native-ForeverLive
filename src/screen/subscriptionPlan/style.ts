import { StyleSheet, Dimensions, Platform } from 'react-native';
import font from '../../theme/font';
 
const { width } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    //  backgroundColor: '#fff',
     marginHorizontal:15 ,
     marginTop:15
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },
  cardWrapper: {
    borderRadius: 20,
    marginBottom: 20,
    padding: 3,
   },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
  marginHorizontal:11,
    // iOS Shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  
    // Android Shadow
    elevation: Platform.OS === 'android' ? 4 : 0, // iOS ignores `elevation`
  },
  planTag: {
    backgroundColor: '#8C52FF',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 12,
  },
  planTagText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 17,
    fontWeight: '700',
     marginBottom: 8,
     color:"black"
  },
  description: {
    fontSize: 15,
    color: '#000000',
     marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});


export default styles;
