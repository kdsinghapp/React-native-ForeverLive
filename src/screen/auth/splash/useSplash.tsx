import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenNameEnum from '../../../routes/screenName.enum';
import ReactNativeBiometrics from 'react-native-biometrics';

type RootStackParamList = {
  TabNavigator: undefined;
  LoginScreen: undefined;
};

const rnBiometrics = new ReactNativeBiometrics();

const useSplash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const isLocked = await AsyncStorage.getItem('isLocked');
        if (isLocked === 'true') {
          // Prompt biometric
          rnBiometrics.simplePrompt({ promptMessage: 'Unlock App' })
            .then(result => {
              if (result.success) {
                navigation.navigate(ScreenNameEnum.TabNavigator);
              } else {
                console.log('Biometric cancelled by user');
                // Optionally: stay on splash or exit app
              }
            })
            .catch(() => {
              console.log('Biometric failed');
              // Optionally: stay on splash or exit app
            });
        } else {
          // Lock is not active, go to TabNavigator directly
          navigation.navigate(ScreenNameEnum.TabNavigator);
        }
      } else {
        navigation.navigate(ScreenNameEnum.LoginScreen);
      }
    } catch (error) {
      console.error('Error reading token or lock from storage:', error);
      navigation.navigate(ScreenNameEnum.LoginScreen);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFocused) {
        checkAuthStatus();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isFocused]);

  return {};
};

export default useSplash;
