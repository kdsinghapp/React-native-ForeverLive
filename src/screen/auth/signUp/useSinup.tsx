import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SinupUserApi } from '../../../redux/Api/AuthApi';
import { Credentials, Errors, RootStackParamList } from './SignUpTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localizationStrings from '../../../Localization/Localization';
 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const useSignup = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setisLoading] = useState<boolean>(false);
 
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
    fullName: '',
    conPassword: '',
    mobile: '',
    city:""
  });

  const handleChange = (field: keyof Credentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Clear error on input change
  };

  const validateFields = (): boolean => {
    const { email, password, fullName, conPassword, mobile ,city} = credentials;
    let validationErrors: Errors = {};

    if (!email.trim()) {
      validationErrors.email = localizationStrings?.email_required;
    } else if (!emailRegex.test(email)) {
      validationErrors.email = localizationStrings?.email_invalid;
    }
    if (!fullName.trim()) {
      validationErrors.fullName = localizationStrings?.full_name;
    }
    if (!mobile.trim()) {
      validationErrors.mobile = localizationStrings?.mob;
    }
    // if (!city.trim()) {
    //   validationErrors.city = "Plese enter city";
    // }
    if (!password.trim()) {
      validationErrors.password = localizationStrings?.password_required;
    } else if (password.length < 6) {
      validationErrors.password = localizationStrings?.password_min_length;
    }
    if (!conPassword.trim()) {
      validationErrors.conPassword =localizationStrings?.confirm_password_required;
    } else if (conPassword.length < 6) {
      validationErrors.conPassword = localizationStrings?.confirm_password_min_length;
    } else if (conPassword !== password) {
      validationErrors.conPassword = localizationStrings?.passwords_do_not_match;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateFields()) return; 
    const role = await AsyncStorage.getItem('userRole');

    try {
      const params = {
        email: credentials.email,
        password: credentials.password,
        fullName: credentials.fullName,
        navigation: navigation,
        mobile: credentials.mobile,
       };
       await SinupUserApi(params, setisLoading);
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  return {
    credentials,
    errors,
    isLoading,
    handleChange,
    handleSignup,
    navigation,
  };
};

export default useSignup;
