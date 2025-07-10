import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
 import { useTheme } from '../../theme/ThemeProvider';
 import {  CreateNoteSave, GetNote,} from '../../redux/Api/AuthApi';

const useText = () => {
  const { theme }:any = useTheme();
  const navigation = useNavigation<any>();
   const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [NotList, setNotList] = useState([]);
 
 useEffect(()=>{
  GetFunction()
 
  },[])
 

  const GetFunction = async () => {
    try {
       const response = await GetNote(setLoading);
      if (response && response.data) {
         setNotList(response?.data)
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };

  const SumitFROM = async (from:any) => {
    try {
       const response = await CreateNoteSave(setLoading,from);
      if (response) {
         GetFunction()
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
   
    isModalVisible,
    setIsModalVisible,
    
    NotList ,
    SumitFROM
  };
};

export default useText;
