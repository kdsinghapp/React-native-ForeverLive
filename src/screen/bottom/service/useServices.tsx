import { useEffect, useState, useCallback, useRef } from 'react';
 import { useNavigation } from '@react-navigation/native';
import { FavoriteServices, FavoriteUser,  GetBanner, GetCategory, GetpostCity, GetProfile, } from '../../../redux/Api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';

const useServices = () => {
  const navigation = useNavigation<any>();
  const [allServies, setAllServies] = useState([]);
   const [getBanner, setGetBanner] = useState([]);
   const isLogin = useSelector((state: any) => state?.auth);
   const [loading, setLoading] = useState(false);
  const [LikeLoading, setLikeLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
        GetFavoriteUser()
  }, []);
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(allServies);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const result = allServies.filter(item =>
        item.category_name?.toLowerCase().includes(lowerQuery)
      );
      setFilteredData(result);
    }
  }, [searchQuery, allServies]);
  

 const GetFavoriteUser= async () => {
   try {
   const data = await FavoriteUser(setLikeLoading,isLogin.userData.id);
    if (data && data.status === "1") {
         setAllServies(data?.result);
         setFilteredData(data.result); // Initialize filteredData

   }  
 } catch (error) {
   console.error("Error in GetCategorys:", error);
 }
}  


const FavoriteApi = async (item:any) => {
   try {
   const data = await FavoriteServices(item,setLikeLoading,isLogin.userData.id);
       GetFavoriteUser()
     
 } catch (error) {
   console.error("Error in GetCategorys:", error);
 }
 }

//  setAllServies(data?.result.slice(0, 8));

 
  return {
    navigation,
    loading,
    setLoading,
 
    allServies,
    setAllServies ,
    getBanner, setGetBanner ,
     FavoriteApi ,
    LikeLoading,
    filteredData,
    searchQuery,
    setSearchQuery
   };
};

export default useServices ;

 