import { StyleSheet, Dimensions } from 'react-native';
import font from '../../../theme/font';
import { Platform } from 'react-native';

  
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
     marginVertical: 12,
    fontFamily:font.PoppinsBold ,
    color:"black"
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
   },
   buttonRow1: {
    flexDirection: "row",
    marginTop: 10,
  },
  actionButton: {
     flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#3658AE',
    borderWidth: 1.5,
    borderRadius: 20,
     marginRight: 8,
    width:"50%" ,
    height:107,
    justifyContent:"center"
  },
  qrButton: {
    borderColor: '#7b61ff',
    borderWidth: 1.5,
    borderRadius: 20,
     alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    flexDirection:"row",
    height:107 ,
    marginTop:11
  },
  icon: {
    fontSize: 12,
    marginRight: 6,
    fontFamily:font.PoppinsRegular,
    color:"black"
  },
  buttonText: {
    fontSize: 14,
     color: '#000',
    fontFamily:font.PoppinsRegular ,
    textAlign:"center" ,
    marginLeft:5
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    flex:1,
    marginHorizontal:2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2, // adjust as needed
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

      },
    }),
  
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#3658AE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
     fontSize: 15,
    color:"black",
    fontFamily:font.PoppinsSemiBold
  },
  email: {
    color: '#9DB2BF',
    fontSize: 12,
    marginTop: 2,
    fontFamily:font.PoppinsRegular
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
    fontSize: 14,
    flex:1
  },
  acceptButton: {
    backgroundColor: "#10B981",
  },
  rejectButton: {
    backgroundColor: "#EF4444",
  },
  buttonText1: {
    color: "#fff",
    fontWeight: "600",

  },
});

export default styles;
