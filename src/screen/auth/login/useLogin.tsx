import { useNavigation } from '@react-navigation/native';
import {   useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUserApi } from '../../../redux/Api/AuthApi';
import { LoginParams, RootStackParamList } from './LoginTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import localizationStrings from '../../../Localization/Localization';

const useLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 const [password, setPassword] = useState<string>('123456');
    const [email, setEmail] = useState<string>('aman@gmail.com'); 
    // const [email, setEmail] = useState<string>('raghav@gmail.com'); 
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleIdentityText = (value: string): void => {
    setEmail(value.trim());
    if (!value.trim()) {
      setEmailError(localizationStrings.email_invalid);
    } else if (!emailRegex.test(value.trim())) {
      setEmailError(localizationStrings?.email_invalid);
    } else {
      setEmailError('');
    }
  };
  const handlePassText = (value: string): void => {
    setPassword(value);
    if (!value.trim()) {
      setPasswordError(localizationStrings?.password_required);
    } else if (value.trim().length < 6) {
      setPasswordError(localizationStrings?.password_min_length)
    } else {
      setPasswordError('');
    }
  };
  const LoginFunction = async (): Promise<void> => {
     const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (!trimmedEmail) {
      setEmailError(localizationStrings?.email_required);
      return;
    } else if (!emailRegex.test(trimmedEmail)) {
      setEmailError(localizationStrings?.email_invalid);
      return;
    } else {
      setEmailError('');
    }
    if (!trimmedPassword) {
      setPasswordError(localizationStrings?.password_required);
      return;
    } else if (trimmedPassword.length < 6) {
      setPasswordError(localizationStrings?.password_min_length);
      return;
    } else {
      setPasswordError('');
    }
    try {
      const params: LoginParams = {
        email: trimmedEmail,
        password: trimmedPassword,
         navigation,
      };
       await LoginUserApi(params, setLoading, dispatch);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

 


  return {
    navigation,
    LoginFunction,
    loading,
    handleIdentityText,
    handlePassText,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    email,
    setEmail,
    password,
    setPassword,
   };
};

export default useLogin;
