import { useState } from 'react';
 import { useNavigation } from '@react-navigation/native';
  const useNotification = () => {
  const [isLoading, setisLoading] = useState()
  const navigation = useNavigation();
  const [settings, setSettings] = useState <any>({
     generalNotification: false,
     sound: true,
     vibrate: false,
     appUpdates: true,
   });
 
   const toggleSwitch = (key:any) => {
     setSettings((prev:any) => ({ ...prev, [key]: !prev[key] }));
   };
 
  


  return {
    isLoading,
    navigation,
    settings, setSettings ,
    toggleSwitch
  };
};

export default useNotification;
