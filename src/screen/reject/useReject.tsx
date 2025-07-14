import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import { NetworksApi } from '../../redux/Api/AuthApi';
  const useReject = () => {
  const navigation = useNavigation<any>();
  const route: any = useRoute();
   const { theme }: any = useTheme();
    const [loading, setLoading] = useState(false);
   const [contacts, setcontacts] = useState([]);
  useEffect(()=>{
  GetFunction()
 },[])
  const GetFunction = async () => {
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
     handleReject
 
  };
};

export default useReject;
