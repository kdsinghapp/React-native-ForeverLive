import { useNavigation, useRoute } from '@react-navigation/native';
import {   useState } from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import { AddgmailMob } from '../../redux/Api/AuthApi';
import { Alert } from 'react-native';
import { errorToast } from '../../utils/customToast';
const useAddEmail = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation() 
  const [email,setemail] = useState()
  const [mob,setMoB] = useState()
const route:any = useRoute()
const {type} = route?.params || ""
const { theme }:any = useTheme();  
const AddType = async () => {
  if (type === "EMAIL") {
    if (!email || email.trim() === "") {
      errorToast("Please enter your email")
       return;
    }
  } else if (type === "NUMBER") {
    if (!mob || mob.trim() === "") {
      errorToast("Please enter your mobile number")

       return;
    }
     const phoneRegex = /^[0-9]{10}$/;
    if (mob) {
      Alert.alert("Please enter a v  mobile number");
      return;
    }
  }
  try {
    const params = {
      navigation: navigation,
      type: type,
       filed: email || mob,
    };
    const response = await AddgmailMob(params, setLoading);
    if (response) {
      // handle successful response
      console.log("Response:", response);
    }
  } catch (error) {
    console.error("Update profile error:", error);
  }
};
  return {
    navigation,
    loading,
    setLoading,
    theme,
    type ,
    AddType ,
    email,setemail,
    mob,setMoB
  };
};

export default useAddEmail;
