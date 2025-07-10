import { useEffect, useState, useCallback, useRef } from 'react';
 import { useNavigation } from '@react-navigation/native';
 import { useDispatch, useSelector } from 'react-redux';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { PermissionsAndroid, Platform } from 'react-native';

const useHome = () => {
  const navigation = useNavigation<any>();
  const [allServies, setAllServies] = useState([]);
 
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state?.auth);
   const [loading, setLoading] = useState(false);
  


 
  return {
    navigation,
    loading,
    setLoading,
 
    allServies,
    setAllServies ,
    
    
   };
};

export default useHome ;

 