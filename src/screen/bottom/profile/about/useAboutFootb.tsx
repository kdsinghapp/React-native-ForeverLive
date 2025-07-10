import { useEffect, useState } from 'react';
 import { useNavigation } from '@react-navigation/native';
  const useAboutFootb = () => {
   const [isLoading,setisLoading] = useState()
   const navigation = useNavigation();
  const [AboutData, setAboutData] = useState<any>([]);
  

  // useEffect(()=>{
  //   GetAbout()
  // },[])
  const GetAbout = async () => {
    try {
        // const state = await GetaboutusePolicyApi(setisLoading);
        // if (state) {
        //       setAboutData(state?.result);   
        // }
    } catch (error) {
         setAboutData([]);  
    }
};

 



  return {
    AboutData, setAboutData,
    isLoading,setisLoading,
    navigation
    };
};

export default useAboutFootb;
