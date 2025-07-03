import { useNavigation, useRoute } from '@react-navigation/native';
   import {  useState } from 'react';
 import { useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import {  OtpUserApi } from '../../../redux/Api/AuthApi';
import {   UserOtpHook } from './OtpTypes';
import localizationStrings from '../../../Localization/Localization';
 
const userOtp = (): UserOtpHook => {
  const route:any = useRoute();
  const { email } =  route.params   || { email: "" };  
  const navigation = useNavigation();
  const [value, setValue] = useState<string>('');
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleChangeText = (text: string) => {
    setValue(text);
    setErrorMessage(text?.length < 4 ? localizationStrings?.otp_required : '');
  };

  const handleVerifyOTP = async () => {
    if (value.length !== 4) {
      setErrorMessage(localizationStrings?.otp_invalid);
      return;
    }
    setErrorMessage('');

    try {
      const params = {
        email,
        navigation,
        otp: value,
      };
      await OtpUserApi(params, setisLoading);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return {
    navigation,
    isLoading,
    ref,
    errorMessage,
    setErrorMessage,
    props,
    getCellOnLayoutHandler,
    value,
    setValue,
    handleChangeText,
    handleVerifyOTP,
    email,
    
  };
};

export default userOtp;

