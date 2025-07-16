import { StyleSheet, Dimensions } from 'react-native';
import font from '../../../theme/font';
  
const { width } = Dimensions.get('window');
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingHorizontal: 16,
   },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  uploadBox: {
    width: (width - 48) / 2,
    height: 80,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#A685E2',
    borderStyle: 'dashed',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    fontSize: 24,
  },
  uploadText: {
    fontSize: 14,
    marginTop: 5,
    color:"balck",
    fontFamily:font.PoppinsRegular
  },
  searchInput: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  gallery: {
    gap: 10,
  },
  emptyGallery: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery1: {
    paddingHorizontal: 16,
  },

  image: {
    width: (width - 48) / 3,
    height: 120,
    borderRadius: 20,
    marginBottom: 12,
  },
});


export default styles;
