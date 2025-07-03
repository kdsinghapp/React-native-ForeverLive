import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Image,
 } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import font from '../../../theme/font';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import LogoutModal from '../../../compoent/LogoutModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const [isLogoutModalVisible,setisLogoutModalVisible] = useState(false)
  const settings = [
    { icon:imageIndex.ProfileInfo, label: 'Profile Info' ,screen:ScreenNameEnum.editProfile },
    { icon:imageIndex.Subscription, label: 'Subscription Plan',screen:ScreenNameEnum.SubscriptionPlan },
    { icon:imageIndex.Language, label: 'Language',screen:ScreenNameEnum.ChangeLanguage },
    { icon: imageIndex.Notifications, label: 'Notifications', toggle: true },
    { icon: imageIndex.PrivacyPolicy, label: 'Privacy Policy',screen:ScreenNameEnum.PrivacyPolicy },
    { icon: imageIndex.Support, label: 'Contact Support' ,screen:ScreenNameEnum.HelpSupport},
    { icon: imageIndex.Logout1, label: 'Logout' },
  ];
const na = useNavigation()
  return (

    <SafeAreaView  style={{
      backgroundColor:"white" ,
      flex:1,
    }}>
      <StatusBarComponent/>
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Setting</Text>
      {settings.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row}
        
        
        onPress={()=>{
          if(item?.label == "Logout"){
            setisLogoutModalVisible(true)
          }else{
            na.navigate(item?.screen)

          }
        }}
        >
          <View style={styles.iconWrapper}>
             <Image source={item.icon} style={{


height:40,
width:40,
resizeMode:"contain"
             }}/>
          </View>
          <Text style={styles.label}>{item.label}</Text>
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
        </TouchableOpacity>
      ))}
        <LogoutModal
  visible={isLogoutModalVisible}
  onClose={() => setisLogoutModalVisible(false)}
  onConfirm={() => setisLogoutModalVisible(false)}
  // onConfirm={handleLogout}
/>
    </ScrollView>
  

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  header: {
    fontSize: 22,
     marginBottom: 20,
     color:"black",
     fontFamily:font.PoppinsSemiBold ,
     marginHorizontal:15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconWrapper: {
     padding: 10,
    borderRadius: 20,
    marginRight: 5,
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontFamily:font.PoppinsRegular
  },
});

export default SettingScreen;
