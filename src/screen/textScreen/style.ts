import { StyleSheet, Dimensions, Platform } from 'react-native';
import font from '../../theme/font';
  

const styles = StyleSheet.create({
  container: {
    padding: 15,
   },
  backButton: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 24,
    color: '#6A53FB',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
     color:"black",
    fontFamily:font.PoppinsSemiBold,
    marginBottom:11
  },
  createNoteCard: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#6A53FB',
     borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width:"35%",
    height:80,
    justifyContent:"center"
  },
  createIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  createText: {
    color: '#8F52CA',
    fontWeight: '600',
    textAlign:"center",
    fontSize:14
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
     marginBottom: 12,
    marginHorizontal:5,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
        },
        android: {
          elevation: 6,
        },
      }),
      
  },
  iconContainer: {
     borderRadius: 10,
    padding: 10,
  },
  icon: {
    width: 55,
    height: 55,
   },
  noteContent: {
    flex: 1,
    marginLeft: 12,
  },
  noteTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  noteTime: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  arrowBtn: {
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    color: '#888',
  },
});

export default styles;
