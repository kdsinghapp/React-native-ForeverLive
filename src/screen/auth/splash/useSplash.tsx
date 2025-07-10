import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenNameEnum from '../../../routes/screenName.enum';

type RootStackParamList = {
  TabNavigator: undefined;
  LoginScreen: undefined;
};

const useSplash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();
 
  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate(ScreenNameEnum.TabNavigator);
      } else {
        navigation.navigate(ScreenNameEnum.LoginScreen);
      }
    } catch (error) {
      console.error('Error reading token from storage:', error);
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
