
import { StyleSheet } from 'react-native';
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
    alignItems: 'center',
  },
  butt: {
    justifyContent: 'flex-start', marginBottom: 15,
    marginHorizontal: 15
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  card: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 34,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    color: '#949494',
    fontWeight: '500',
  },
  imagBag:{
    height: 130,
    width: 330,
    borderRadius: 20,
  }
   
});
export default styles;
