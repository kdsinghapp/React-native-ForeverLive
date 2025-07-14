import { useEffect, useState,   } from 'react';
 import { useNavigation } from '@react-navigation/native';
 import { useTheme } from '../../theme/ThemeProvider';
import {   GetPlan_Api } from '../../redux/Api/AuthApi';
 
 
const useSubscriptionPlan = () => {
  const navigation = useNavigation<any>();
  const { theme }:any = useTheme();

      const [loading, setLoading] = useState(false);
    const [plan, setplan] = useState([]);
 
useEffect(()=>{
  GetFunction()
},[])


  const GetFunction = async () => {
    try {
       const response = await GetPlan_Api(setLoading);
      if (response && response.data) {
         setplan(response.data)
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
    plan, setplan
    
   };
};

export default useSubscriptionPlan ;

 