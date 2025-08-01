import {   useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { useTheme } from '../../../theme/ThemeProvider';
import { RootStackParamList } from '../../auth/login/LoginTypes';
import {   useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { errorToast, successToast } from '../../../utils/customToast';
 import { Alert } from 'react-native';
 import ReactNativeBiometrics from 'react-native-biometrics';
 
const rnBiometrics = new ReactNativeBiometrics();
const useSetting = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isEnabled, setIsEnabled] = useState(true);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const { theme, toggleTheme }:any = useTheme();
  const isEnabledDark = theme.mode === 'dark';
 const [isLogoutModalVisible,setisLogoutModalVisible] = useState(false)

 const [isLocked, setIsLocked] = useState(false);       // Lock state
 const [isAuthenticated, setIsAuthenticated] = useState(false);  // User biometric authenticated
 const [loading, setLoading] = useState(true);          // For initial check


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
useEffect(() => {
  const checkLockAndAuthenticate = async () => {
    const lockValue = await AsyncStorage.getItem('isLocked');
    if (lockValue === 'true') {
      setIsLocked(true);

      // Prompt biometric since lock is active
      rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to unlock app' })
        .then(result => {
          if (result.success) {
            setIsAuthenticated(true);
            setLoading(false);
          } else {
            successToast("You cannot access without biometric")

             setIsAuthenticated(false);
            setLoading(false);
          }
        })
        .catch(() => {
           errorToast("Cancelled Authentication cancelled")

           setIsAuthenticated(false);
          setLoading(false);
        });
    } else {
      // Lock not active
      setIsLocked(false);
      setIsAuthenticated(true);  // Allow access
      setLoading(false);
    }
  };

  checkLockAndAuthenticate();
}, []);
const handleToggle = async (value:any) => {
  if (value) {
    rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to enable lock' })
      .then(result => {
        if (result.success) {
          setIsLocked(true);
          AsyncStorage.setItem('isLocked', 'true');
            successToast("Lock enabled Success");  
 
        } else {
          setIsLocked(false);
          AsyncStorage.setItem('isLocked', 'false');
          errorToast("Cancelled Authentication cancelled")
         }
      })
      .catch(() => {
        setIsLocked(false);
        AsyncStorage.setItem('isLocked', 'false');
        errorToast("Biometric authentication failed")
       });
  } else {
    setIsLocked(false);
    await AsyncStorage.setItem('isLocked', 'false');
    errorToast("Lock Disabled")

    
  }
};
 
  return {
    isEnabled, setIsEnabled ,
    theme, toggleTheme,
    isEnabledDark,
    isLogoutModalVisible,setisLogoutModalVisible ,
    toggleSwitch ,
    navigation ,
    handleLogout ,
    isLocked, setIsLocked ,
    isAuthenticated, setIsAuthenticated ,
    loading, setLoading ,
    handleToggle
   };
};

export default useSetting;
 // For initial check
