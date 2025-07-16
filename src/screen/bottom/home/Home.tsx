import React from 'react';
import {
  View,
  Text,
   TouchableOpacity,
  Image,
   FlatList,
 } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import styles from './style';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import useHome from './useHome';
import HomeCard from '../../../compoent/card/homeCrard/HomeCrard';

const data = [
  { label: 'Memory Lane ', icon:imageIndex.memory ,screen:ScreenNameEnum.MemoryLane},
  { label: 'Vault Access',  icon:imageIndex.VaultAccess,screen:ScreenNameEnum.VaultAccess },
  // { label: 'Countdown Moments',icon:imageIndex.Countdown,screen:ScreenNameEnum.LegacyCalendar},
  { label: 'Countdown Moments',icon:imageIndex.Countdown,screen:ScreenNameEnum.Countdown},
  { label: 'Legacy Calendar',icon:imageIndex.Calendar ,screen:ScreenNameEnum.LegacyCalendar},
  { label: 'Legacy Value',icon:imageIndex.Legacy,screen:ScreenNameEnum.MemoryLane},
  { label: 'Coming Soon',icon:imageIndex.Comin,screen:ScreenNameEnum.MemoryLane },
];

const HomeScreen = () => {
const {
  navigation,
  loading,
   theme,
  isLogin
  
}= useHome()
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}> 
    <StatusBarComponent/>
    <View style={styles.header}>
        <View>
          <Text style={[styles.welcomeText,{
                  color:theme.text

          }]}>Welcome back</Text>
          <Text style={[styles.userName,{
                  color:theme.text

          }]}>{isLogin?.userData?.user_data?.full_name}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate(ScreenNameEnum.editProfile)}> 
        <Image
  source={
    isLogin?.userData?.user_data?.image
      ? { uri: isLogin.userData.user_data.image }
      : imageIndex.HomeProfile // डिफ़ॉल्ट इमेज
  }
  style={{
    height: 50,
    width: 50,
    borderRadius: 25, // Perfectly circular
  }}
  resizeMode="cover"
/>

        {/* <Image source={imageIndex.HomeProfile} style={styles.profileImage} /> */}
        </TouchableOpacity>
      </View>

      <FlatList
  data={data}
  numColumns={2}
  style={{ flex: 1 }}
  renderItem={({ item }) => (
    <HomeCard item={item} />
  )}
  keyExtractor={(item) => item.label.toString()}
  columnWrapperStyle={styles.row}
  showsVerticalScrollIndicator={false}
/>

     </SafeAreaView>
  );
};

export default HomeScreen;
