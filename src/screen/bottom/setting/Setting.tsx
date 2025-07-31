import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
   TouchableOpacity,
  Switch,
  ScrollView,
  Image,
 } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
 import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
 import LogoutModal from '../../../compoent/LogoutModal';
import { SafeAreaView } from 'react-native-safe-area-context';
  import useSetting from './useSetting';
import getStyles from './style';
import localizationStrings from '../../../Localization/Localization';
import { useFocusEffect } from '@react-navigation/native';

const SettingScreen = () => {
  const settings = [
    { icon:imageIndex.ProfileInfo, label: localizationStrings.ProfileInfo ,screen:ScreenNameEnum.editProfile },
    { icon:imageIndex.Subscription, label: localizationStrings.SubscriptionPlan,screen:ScreenNameEnum.SubscriptionPlan },
    { icon:imageIndex.Language, label: localizationStrings.language,screen:ScreenNameEnum.ChangeLanguage },
    // { icon: imageIndex.Notifications, label: 'Notifications', toggle: true },
    { icon: imageIndex.PrivacyPolicy, label: localizationStrings.PrivacyPolicy,screen:ScreenNameEnum.PrivacyPolicy },
    { icon: imageIndex.Support, label:localizationStrings.ContactSuppor ,screen:ScreenNameEnum.HelpSupport},
    { icon: imageIndex.Logout1, label: localizationStrings.Logout,type:"Logout" },
    { icon: imageIndex.dark1, label: localizationStrings?.DarkMODE, type:"Dark MODE",screen:"Logoutd" , darktoggle: true },

  ];
  const [ns ,setname]= useState([])
useEffect(()=>{
},[])
useFocusEffect(
  useCallback(() => {
    setname(settings)


    return () => {
      console.log('Screen is unfocused');
    };
  }, [ns])
);
 const {        isEnabled,  
  theme, toggleTheme,
  isEnabledDark,
  isLogoutModalVisible,setisLogoutModalVisible ,
  toggleSwitch ,
  navigation ,
  handleLogout} = useSetting()
  const styles = getStyles(theme); // 👈 dynamic style generation

   return (

    <SafeAreaView  style={{
      backgroundColor: theme.background,
      flex:1, 
    }}>
      <StatusBarComponent/>
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.header}>{localizationStrings?.Setting}</Text>
      {ns.map((item, index) => (
  <TouchableOpacity
    key={index}
   >
    <TouchableOpacity
    key={index}
    style={styles.row}
    onPress={() => {
      if (item?.type == "Logout") {
        setisLogoutModalVisible(true);
      } else {
        navigation.navigate(item?.screen);
      }
    }}
  >
    <View style={styles.iconWrapper}>
      <Image
       source={
        item.type === 'Dark MODE'
          ? (isEnabledDark ? imageIndex.dark1 : imageIndex.dark)
          : item.icon
      }
        style={{
          height: 40,
          width: 40,
          resizeMode: "contain"
        }}
      />
    </View>

    <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
    {item.toggle && (
      <Switch
      style={{ marginLeft: 'auto' ,bottom:50}}
      trackColor={{ false: '#ccc', true: '#6A5AE0' }}
        thumbColor={'#fff'}
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )}
   {item.darktoggle && (
              <Switch
              style={{ marginLeft: 'auto' ,bottom:50}}
                trackColor={{ false: '#ccc', true: '#6A5AE0' }}
                thumbColor="#fff"
                ios_backgroundColor="#ccc"
                onValueChange={toggleTheme}
                value={isEnabledDark}
              />
            )}
  </TouchableOpacity>
))}

        <LogoutModal
  visible={isLogoutModalVisible}
  onClose={() => setisLogoutModalVisible(false)}
   onConfirm={handleLogout}
/>
    </ScrollView>
  

    </SafeAreaView>
  );
};


export default SettingScreen;
