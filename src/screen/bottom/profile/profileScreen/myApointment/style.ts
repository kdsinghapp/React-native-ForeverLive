
import { Dimensions, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "white",
     
  },
  header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 10,
  },
  backButton: {
      padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 18,
      alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:28
  },
  tabTextActive: {
    color: 'black',
  },
  activeUnderline: {
    height: 3,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 5,
    borderRadius: 2,
  },

tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "black",
},
activeTab: {
    backgroundColor: "white",
},
tabText: {
    color: "#333",
    fontWeight: "bold",
},
activeTabText: {
    color: "#fff",
},

  headerText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
  },
  emptySpace: {
      width: 32, // Placeholder to center text
  },
  card: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 12,
      marginBottom: 11,
      elevation: 3,
      marginVertical:1,
      marginHorizontal:1
  },
  image: {
      width: 120,
      height: 120,
      borderRadius: 10,
  },
  infoContainer: {
      marginTop: 10,
   },
  name: {
      fontSize: 16,
      fontWeight: "700",
      color: "black"
  },
  row: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 6,
  },
  location: {
      marginLeft: 4,
      fontSize: 13,
      color: "#878787",
      fontWeight: "500"
  },
  date: {
      fontSize: 12,
      color: "#878787",
      marginTop: 6,
      fontWeight: "500"
  },
  price: {
      fontSize: 16,
      fontWeight: "500",
      marginTop: 6,
      color: "#000000"
  },
  category: {
      fontSize: 14,
      color: "#9E9E9E",
      fontWeight:"700"
  },
  cancelButton: {
      backgroundColor: "#FF3B30",
      paddingVertical: 12,
      borderRadius: 6,
      alignItems: "center",
      marginTop: 10,
  },
  cancelText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
  },
  cancelView:{
    backgroundColor: "#000000",
    marginTop: 18,
    height: 46,
    marginBottom: 15,
    borderRadius: 10,

},
message: {
  fontSize: 16,
  color: '#333',
  textAlign: 'center',
  marginBottom: 20,
},
noButton: {
  backgroundColor: '#ccc',
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 8,
  marginRight: 10,
},
yesButton: {
  backgroundColor: 'black',
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 8,
},
noText: {
  color: '#000',
  fontWeight: '600',
},
yesText: {
  color: '#fff',
  fontWeight: '600',
},

overlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
   },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
   },
  reviewInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    height: 80,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom:12,
    marginTop: 15,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginTop: 20,
    marginHorizontal:30
   },
  cancelBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  submitBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    flex:1,
    height:55,
    justifyContent:"center",
   },
   
  submitText: {
    color: '#fff',
    fontWeight: '600',
    textAlign:"center",
    fontSize:18
  },

});
export default styles;
