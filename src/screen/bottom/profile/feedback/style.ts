
import {  StyleSheet } from 'react-native';
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 45
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    marginVertical: 10,
    marginTop: 30
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 90,
    textAlignVertical: 'top',
    marginLeft: 8
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
