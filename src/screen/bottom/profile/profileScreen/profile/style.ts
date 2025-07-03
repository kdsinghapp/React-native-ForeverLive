
import {  StyleSheet } from 'react-native';
 

 const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    backgroundColor: "white"
  },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop:30
    },
    header: { fontSize: 24, color: "black", fontWeight: "700", textAlign: "center", marginVertical: 10 },
    profileHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      backgroundColor: "white",
      justifyContent: "space-between",
      marginTop:10,
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 72,
      borderColor:"#9DB2BF",

      borderWidth:1,
    },
    profileInfo: {
      marginLeft: 15,
    },
    profileName: {
      fontSize: 18,
      fontWeight: "700",
      color: "rgba(0, 0, 0, 1)"
    },
    profileLink: {
      fontSize: 12,
      color: "rgba(157, 178, 191, 1)",
      fontWeight: "400"
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 0.8,
      borderBottomColor: "#E0E0E0",
      justifyContent: "space-between",
      borderTopWidth:0.8,
      borderTopColor:"#E0E0E0"
    },
    menuText: {
      fontSize: 14,
      marginLeft: 10,
      color: "rgba(53, 44, 72, 1)",
      fontWeight: "500"
    },
  });
export default styles;
