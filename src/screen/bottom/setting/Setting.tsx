import React, { useState } from 'react';
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

const SettingScreen = () => {
  const settings = [
    { icon:imageIndex.ProfileInfo, label: 'Profile Info' ,screen:ScreenNameEnum.editProfile },
    { icon:imageIndex.Subscription, label: 'Subscription Plan',screen:ScreenNameEnum.SubscriptionPlan },
    { icon:imageIndex.Language, label: 'Language',screen:ScreenNameEnum.ChangeLanguage },
    { icon: imageIndex.Notifications, label: 'Notifications', toggle: true },
    { icon: imageIndex.PrivacyPolicy, label: 'Privacy Policy',screen:ScreenNameEnum.PrivacyPolicy },
    { icon: imageIndex.Support, label: 'Contact Support' ,screen:ScreenNameEnum.HelpSupport},
    { icon: imageIndex.Logout1, label: 'Logout' },
    { icon: imageIndex.dark1, label: 'Dark MODE', darktoggle: true },

  ];

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
      <Text style={styles.header}>Setting</Text>
      {settings.map((item, index) => (
  <TouchableOpacity
    key={index}
    style={styles.row}
 
  >
    <TouchableOpacity
    key={index}
    style={styles.row}
    onPress={() => {
      if (item?.label === "Logout") {
        setisLogoutModalVisible(true);
      } else {
        navigation.navigate(item?.screen);
      }
    }}
  >
    <View style={styles.iconWrapper}>
      <Image
       source={
        item.label === 'Dark MODE'
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
        style={{ marginLeft: 'auto' }}
        trackColor={{ false: '#ccc', true: '#6A5AE0' }}
        thumbColor={'#fff'}
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )}
   {item.darktoggle && (
              <Switch
              style={{ marginLeft: 'auto' }}
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
