import { useFocusEffect, useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { useTheme } from '../../../theme/ThemeProvider';
import { RootStackParamList } from '../../auth/login/LoginTypes';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { successToast } from '../../../utils/customToast';
import localizationStrings from '../../../Localization/Localization';

const useSetting = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isEnabled, setIsEnabled] = useState(true);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const { theme, toggleTheme }:any = useTheme();
  const isEnabledDark = theme.mode === 'dark';
 const [isLogoutModalVisible,setisLogoutModalVisible] = useState(false)

 

 const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('token');  // Remove user data from storage
     navigation.reset({
      index: 0,
      routes: [{ name: ScreenNameEnum.SPLASH_SCREEN }],
    });
    await AsyncStorage.removeItem('user');  // Remove user data from storage
    successToast("Logout Successfully")
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
 
  return {
    isEnabled, setIsEnabled ,
    theme, toggleTheme,
    isEnabledDark,
    isLogoutModalVisible,setisLogoutModalVisible ,
    toggleSwitch ,
    navigation ,
    handleLogout
   };
};

export default useSetting;
