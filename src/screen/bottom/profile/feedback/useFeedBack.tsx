import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AddfeedbackApi } from '../../../../redux/Api/AuthApi';
 const useFeedBack = () => {
  const [isLoading, setisLoading] = useState()
  const navigation = useNavigation();
  const [sumTitle, setsumTitle] = useState<string>("");
  const isLogin = useSelector ((state:any) => state?.auth);
  const [rating, setRating] = useState(0);
  const handleSubmit = async () => {
    if (!rating || !sumTitle) {
       navigation.goBack();
      return;  
    }
    try {
      const params = {
        messs: sumTitle,
        navigation: navigation,
        id: isLogin?.userData?.id,
        rating: rating
      };
      const response = await AddfeedbackApi(params, setisLoading);
    } catch (error) {
     }
  };
  


  return {
    isLoading,
    navigation,
    sumTitle, setsumTitle,
    handleSubmit,
    rating, setRating
  };
};

export default useFeedBack;
