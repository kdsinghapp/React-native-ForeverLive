import { useEffect, useState } from 'react';
 import { useNavigation } from '@react-navigation/native';
import { Add_ratesUserSilde, ApointmentApicall, CancelAppointement, SellerBokingList } from '../../../../../redux/Api/AuthApi';
import { useSelector } from 'react-redux';
 import { errorToast } from '../../../../../utils/customToast';
import localizationStrings from '../../../../../Localization/Localization';
  const usemyApointment = () => {
   const [isLoading,setisLoading] = useState(false)
    const navigation = useNavigation();
  const [myApointement, setMyApointement] = useState<any>([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviewData, setreviewData] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // 👈 Proper state setup
  const [isCancelModal, setisCancelModal] = useState(false); // 👈 Proper state setup
  const isLogin = useSelector((state: any) => state?.auth);

  const handleSubmit = async() => {
    if (rating === 0 || review.trim() === '') {
      errorToast(localizationStrings?.give_rating_review)
       return;
    }
     const Parms ={
      rating:rating,
      review:review,
      servicesid:reviewData?.seller_id ,
      userId: isLogin.userData.id
    } 
      try {
        setIsModalVisible(false)
      const data = await Add_ratesUserSilde(setisLoading, Parms );
      if (data && data.status === "1") {
        setRating(0);
        setReview('');
       }
    } catch (error) {
      console.error("Error in GetData:", error);
    // onSubmit({ rating, review });
    setRating(0);
    setReview('');
    // onClose();
  };
  }
    useEffect(()=>{
    GetData()
  },[])


  const SubmitCancle = async() => {
    console.log("")
      const Parms ={
       servicesid:reviewData?.id ,
     } 
      try {
        setisCancelModal(false)
   const data = await CancelAppointement(setisLoading, Parms );
   if(data){
    GetData()
   }

    } catch (error) {
      console.error("Error in GetData:", error);
    // onSubmit({ rating, review });
  
    // onClose();
  };
  }
  const GetData = async () => {
    try {
      const data = await ApointmentApicall(setisLoading, isLogin.userData.id);
      if (data && data.status === "1") {
          setMyApointement(data?.result);
      }
    } catch (error) {
      console.error("Error in GetData:", error);
    }
  };
  

  return {
    myApointement,  
    isLoading,setisLoading,
    navigation,
    review, setReview ,
    rating, setRating ,
    handleSubmit ,
    isModalVisible, setIsModalVisible ,
    reviewData, setreviewData ,
    isCancelModal, setisCancelModal,
    SubmitCancle,
    };
};

export default usemyApointment;
