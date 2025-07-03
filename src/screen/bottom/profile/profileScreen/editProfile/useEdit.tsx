import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
// import ImagePicker from "react-native-image-crop-picker";
import { GetProfile, UpdateProfile_Api } from '../../../../../redux/Api/AuthApi';
import { ImageFile, RootState } from './EditTypes';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { PermissionsAndroid, Platform } from 'react-native';


 const useEdit = () => {

  const [imagePrfile, setImagePrfile] = useState<ImageFile | null>(null);
  const [isLoading, setisLoading] = useState()
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [dropOpen, setDropOpen] = useState <boolean>(false);
  const [selectedOption, setSelectedOption] = useState();
  const [fullName, setFullName] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<number>();
  const [email, setEmail] = useState<string>();
  const isLogin = useSelector <RootState>((state) => state?.auth);
   const [isModalVisible, setIsModalVisible] = useState(false);
  const getLogin = useSelector((state: any) => state?.feature);
  const [countryModal, setCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ country: 'United Arab Emirates', code: '+971', flag: '🇦🇪' });
  // useEffect(()=>{
  //   requestCameraPermission()
  // },[])
  //  const requestCameraPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.requestMultiple([
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       ]);
  
  //       return (
  //         granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
  //         granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
  //         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
  //       );
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else {
  //     // iOS permissions
  //     try {
  //       const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
  //       const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
  
  //       return (
  //         cameraStatus === RESULTS.GRANTED && photoStatus === RESULTS.GRANTED
  //       );
  //     } catch (error) {
  //       console.warn("iOS Permission error:", error);
  //       return false;
  //     }
  //   }
  // };
  
  const handleCountrySelect = (countryData) => {
    setSelectedCountry(countryData);
    setCountryModal(false);
  };
  useEffect(() => {
    if (getLogin?.userGetData) {
      setFullName(getLogin?.userGetData?.user_name);
      setPhoneNumber(getLogin?.userGetData?.mobile || "");
      setEmail(getLogin?.userGetData?.email);
    }
  }, [isLogin]);
  const pickImageFromGallery = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: false,
    // })
    //   .then((image) => {
    //     setImagePrfile(image)
    //     setIsModalVisible(false);
    //   })
    //   .catch((error) => console.log(error));
  };

  const takePhotoFromCamera = async () => {
    // try {
    //   const image: any = await ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping: false,
    //   });
    //   setImagePrfile(image)
    //   setIsModalVisible(false);
    // } catch (error: any) {
    //   Alert.alert('Error', error.message);
    // }
  };

  const handleSubmit = async () => {

    try {
      const params = {
        name: fullName,
        images: imagePrfile,
        userId: isLogin.userData.id,
        gender: selectedOption,
        mobiles: PhoneNumber,
        navigation: navigation,
        email: getLogin?.userGetData?.email
      };
      console.log("params", params.images)
      const response = await UpdateProfile_Api(params, setisLoading);
      if (response) {
        GetProfile(isLogin?.userData?.id, dispatch);
      }

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  return {
    imagePrfile,
    isLoading,
    navigation,
    takePhotoFromCamera,
    pickImageFromGallery,
    isModalVisible, setIsModalVisible,
    dropOpen, setDropOpen,
    selectedOption, setSelectedOption,
    fullName, setFullName,
    PhoneNumber, setPhoneNumber,
    email, setEmail,
    handleSubmit,
    getLogin ,
    countryModal, setCountryModal ,
    selectedCountry, setSelectedCountry,
    handleCountrySelect

  };
};

export default useEdit;
