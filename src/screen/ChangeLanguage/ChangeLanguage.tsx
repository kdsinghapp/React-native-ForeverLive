import { Image, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native'
import React, { useState } from 'react'
import imageIndex from '../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../compoent/CustomHeader';
   
const ChangeLanguage = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [lang, setLang] = useState('fr')
  return (
    <SafeAreaView style={styles.container}>
    <CustomHeader label='Language' imageSource={imageIndex.backImg}/>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setLang('en')
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={imageIndex.english} style={styles.icon} />
          <Text style={styles.menuText}>English</Text>
 
 
        </View>
        <Image  
        
        resizeMode='contain'

        source={lang == "en" ? imageIndex.raido : imageIndex.radio} style={{ height: 24, width: 24 }} />
 
      </TouchableOpacity>
 
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setLang("fr")
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image 
          
          
          source={imageIndex.frenchs} style={styles.icon} />
          <Text style={styles.menuText}>French</Text>
        </View>
        <Image 
        
        resizeMode='contain'
        source={lang == "fr" ? imageIndex.raido : imageIndex.radio} style={{ height: 24, width: 24 }} />
 
      </TouchableOpacity>
 
    </SafeAreaView>
 
  )
}
 
export default ChangeLanguage
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: "space-between"
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
 