
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 15,
      paddingTop: 18,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30,
    },
    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
  
    },
    settingText: {
      fontSize: 16,
      fontWeight: '700',
      color: "black"
    },
  });
export default styles;
