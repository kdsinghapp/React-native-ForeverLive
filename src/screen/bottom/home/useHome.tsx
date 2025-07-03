import { useEffect, useState, useCallback, useRef } from 'react';
 import { useNavigation } from '@react-navigation/native';
import { FavoriteServices, FavoriteUser,  GetBanner, GetCategory, GetpostCity, GetProfile, SellerServies, } from '../../../redux/Api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { PermissionsAndroid, Platform } from 'react-native';

const useHome = () => {
  const navigation = useNavigation<any>();
  const [allServies, setAllServies] = useState([]);
  const [allCategore, setAllCategore] = useState([]);
  const [getBanner, setGetBanner] = useState([]);
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state?.auth);
  const [getCity, setGetCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [LikeLoading, setLikeLoading] = useState(false);
  useEffect(() => {
    fetchProfile()
    GetCategorys();
    GetbannerApi()
    GetCityApi();
     GetFavoriteUser()
  }, []);

  const flatListRef:any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
   useEffect(() => {
    const totalItems = getBanner.length;
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= totalItems) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000);  

    return () => clearInterval(interval);
  }, [currentIndex, getBanner.length]); 

 
  const GetCategorys = async () => {
     try {
      const data = await GetCategory(setLoading);
      if (data && data.status === "1") {
        setAllCategore(data?.result)
      }  
    } catch (error) {
      console.error("Error in GetCategorys:", error);
    }
  };
  const fetchProfile = useCallback(() => {
    if (isLogin?.userData?.id) {
      GetProfile(isLogin?.userData?.id, dispatch);
    }
  }, [isLogin?.userData?.id, dispatch]);

  const GetbannerApi = async () => {
    try {
     const data = await GetBanner(setLoading);
     if (data && data.status === "1") {
      setGetBanner(data?.result)
     }  
   } catch (error) {
     console.error("Error in GetCategorys:", error);
   }
 };
  const GetCityApi = async () => {
    try {
     const data = await GetpostCity(setLoading);
     if (data && data?.status === "1") {
       setGetCity(data?.result?.slice(0, 5));
     }  
   } catch (error) {
    }
 };

 const GetFavoriteUser= async () => {
   try {
   const data = await FavoriteUser(setLikeLoading,isLogin.userData.id);
     if (data && data.status === "1") {
         setAllServies(data?.result);
    }  
 } catch (error) {
   console.error("Error in GetCategorys:", error);
 }
}  


const FavoriteApi = async (item:any) => {
   try {
   const data = await FavoriteServices(item,setLikeLoading,isLogin?.userData?.id);
       GetFavoriteUser()
     
 } catch (error) {
   console.error("Error in GetCategorys:", error);
 }
 }
useEffect(()=>{
  requestCameraPermission()
},[])
 const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      return (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    // iOS permissions
    try {
      const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
      const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

      return (
        cameraStatus === RESULTS.GRANTED && photoStatus === RESULTS.GRANTED
      );
    } catch (error) {
      console.warn("iOS Permission error:", error);
      return false;
    }
  }
};



 
  return {
    navigation,
    loading,
    setLoading,
    allCategore,
    setAllCategore,
    allServies,
    setAllServies ,
    getBanner, setGetBanner ,
    flatListRef ,
    getCity,
    FavoriteApi ,
    LikeLoading ,
    
   };
};

export default useHome ;

 