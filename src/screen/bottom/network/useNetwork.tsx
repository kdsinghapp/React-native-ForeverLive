import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
 import {   GetRequestApi, NetworksApi } from '../../../redux/Api/AuthApi';
import { useTheme } from '../../../theme/ThemeProvider';
const useNetwork = () => {
  const navigation = useNavigation<any>();
  const route: any = useRoute();
   const { theme }: any = useTheme();
    const [loading, setLoading] = useState(false);
   const [contacts, setcontacts] = useState([]);
   const [getRequest, setgetRequest] = useState([]);
  useEffect(()=>{
  GetFunction()
  GetRequests()
 },[])
  const GetFunction = async () => {
    try {
       const response = await GetRequestApi(setLoading);
      if (response && response.data) {
        setgetRequest(response.data)
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };
  const GetRequests = async () => {
    try {
       const response = await NetworksApi(setLoading);
      if (response && response.data) {
        setcontacts(response.data)
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };
  const handleAccept = (userId) => {
    console.log("Accepted user:", userId);
    // ✅ Add accept API call here
  };

  const handleReject = (userId) => {
    console.log("Rejected user:", userId);
    // ❌ Add reject API call here
  };
   return {
    navigation,
    loading,
    setLoading,
    theme,
     contacts,
  
     handleAccept ,
     handleReject,
     GetRequests ,
     getRequest
 
  };
};

export default useNetwork;
