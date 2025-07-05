
import {   StyleSheet } from 'react-native';     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
   },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  logoImage: {
    width: 94,
    height: 94,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 36,
    marginTop: 15,
    textAlign: 'left',
    marginLeft: 15
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginTop:15
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
    fontWeight: "500"
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  logoutButton: {
    position: "relative",
    top: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 14,
 
  },
  logoutText: {
    fontSize: 14,
    marginLeft: 10,
    color: 'rgba(53, 44, 72, 1)',
    fontWeight: "500",
    lineHeight: 100,
 
  },
  subMenuItem: {
    paddingLeft: 60,
    paddingVertical: 10,
  },
  subMenuText: {
    fontSize: 14,
    color: '#333',
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] // Optional: Make it slightly bigger
  }
});
export default styles;
