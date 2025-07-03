import { useEffect} from 'react';
 import { useIsFocused, useNavigation } from '@react-navigation/native';
 import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenNameEnum from '../../../routes/screenName.enum';
type RootStackParamList = {
  TabNavigator: undefined;  
  LoginScreen:undefined
};
 const useSplash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isLogin = useSelector((state: any) => state.auth);
  const isFocus = useIsFocused();
  const checkLogout = () => {
    if (isLogin?.isLogin) {
      navigation.navigate(ScreenNameEnum.TabNavigator);
    } else {
       navigation.navigate(ScreenNameEnum.OnboardingScreen);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkLogout();
    }, 2500);  
    return () => clearTimeout(timer);  
  }, [isFocus, navigation]);   




  
  return {
    
  };
};

export default useSplash;
