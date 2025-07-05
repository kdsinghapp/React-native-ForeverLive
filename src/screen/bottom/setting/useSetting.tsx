import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { useTheme } from '../../../theme/ThemeProvider';
import { RootStackParamList } from '../../auth/login/LoginTypes';
import { useState } from 'react';

const useSetting = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isEnabled, setIsEnabled] = useState(true);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const { theme, toggleTheme }:any = useTheme();
  const isEnabledDark = theme.mode === 'dark';
 const [isLogoutModalVisible,setisLogoutModalVisible] = useState(false)


  return {
    isEnabled, setIsEnabled ,
    theme, toggleTheme,
    isEnabledDark,
    isLogoutModalVisible,setisLogoutModalVisible ,
    toggleSwitch ,
    navigation
   };
};

export default useSetting;
