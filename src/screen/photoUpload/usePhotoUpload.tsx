import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { useTheme } from '../../theme/ThemeProvider';
import { ImageFile } from '../bottom/profile/profileScreen/editProfile/EditTypes';
import {  GetUploadFile,  UploadFile } from '../../redux/Api/AuthApi';

const usePhotoUpload = () => {
  const navigation = useNavigation<any>();
  const route: any = useRoute();
  const { type } = route?.params || {};
  const { theme }: any = useTheme();
  const isLogin = useSelector((state: any) => state?.auth);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [videoList, setvideoList] = useState([]);
  const [imageProfile, setImageProfile] = useState<ImageFile | null>(null);
  const [camerImage, setcamerImage] = useState<ImageFile | null>(null);
  const [imgloading, setimgloading] = useState(true);

 useEffect(()=>{
  GetFunction()

 },[])

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then((image) => {
        
        setImageProfile(image);
        setIsModalVisible(false);
        setUploadModal(true)
      })
      .catch((error) => {
        console.log("Gallery error:", error);
      });
  };
  const takePhotoFromCamera = async () => {
    try {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        Alert.alert("Permission Denied", "Camera permission is required.");
        return;
      }
      const image: any = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: false,
      });
      // setcamerImage(image);
      setImageProfile(image);
      setIsModalVisible(false);
      setUploadModal(true)
    } catch (error: any) {
      Alert.alert("Error", error.message || "Camera access failed");
    }
  };

  const requestCameraPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const permissions =
          Platform.Version >= 33
            ? [
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
              ]
            : [
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              ];

        const granted = await PermissionsAndroid.requestMultiple(permissions);

        return (
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
          (granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] === PermissionsAndroid.RESULTS.GRANTED ||
            granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED) &&
          (granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] === PermissionsAndroid.RESULTS.GRANTED ||
            true)
        );
      } catch (err) {
        console.warn("Android permission error:", err);
        return false;
      }
    } else {
      try {
        const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
        const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        const micStatus = await request(PERMISSIONS.IOS.MICROPHONE);
        return (
          cameraStatus === RESULTS.GRANTED &&
          photoStatus === RESULTS.GRANTED &&
          micStatus === RESULTS.GRANTED
        );
      } catch (error) {
        console.warn("iOS permission error:", error);
        return false;
      }
    }
  };
  
  const GetFunction = async () => {
    try {
       const response = await GetUploadFile(setLoading,"IMAGE");
      if (response && response.data) {
        setvideoList(response?.data)
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };
  
  const uploadFile = async () => {
    try {
      const params = {
        img:imageProfile?.path,
         navigation: navigation, 
         type:"IMAGE"

      };
      const response = await UploadFile(params, setLoading);
      if (response) {
       setUploadModal(false)
       GetFunction(),
       setIsModalVisible(false)
      }
    } catch (error) {
      console.error("Update profile error:", error);
    }
  };
  return {
    navigation,
    loading,
    setLoading,
    theme,
    isLogin,
    imageProfile,
    isModalVisible,
    setIsModalVisible,
    pickImageFromGallery,
    takePhotoFromCamera,
    type ,
    uploadModal, setUploadModal,
    camerImage ,
    videoList ,
    setImageProfile,
    uploadFile ,
    imgloading, setimgloading
  };
};

export default usePhotoUpload;
