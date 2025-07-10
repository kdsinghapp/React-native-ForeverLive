import { useEffect, useState,   } from 'react';
 import { useNavigation } from '@react-navigation/native';
import {    Get_post_Api,   } from '../../../redux/Api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
  import { loginSuccess } from '../../../redux/feature/authSlice';
import { useTheme } from '../../../theme/ThemeProvider';

const useHome = () => {
  const navigation = useNavigation<any>();
  const { theme }:any = useTheme();

    const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state?.auth);
    const [loading, setLoading] = useState(false);
   useEffect(() => {
    GetFunction()
  }, []);




  const GetFunction = async () => {
    try {
       const response = await Get_post_Api(setLoading);
      if (response && response.data) {
        dispatch(loginSuccess({
          userData: response.data,
          token: response.data.token,
        }));
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };

   return {
    navigation,
    loading,
    setLoading,
    theme,
    isLogin
    
   };
};

export default useHome ;

 