import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { useTheme } from '../../theme/ThemeProvider';
import { ImageFile } from '../bottom/profile/profileScreen/editProfile/EditTypes';
import {  GetUploadFile,   UploadFile1 } from '../../redux/Api/AuthApi';
import { requestCameraPermissions } from '../../requestCameraPermissions';

const useVideoUpload = () => {
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
 useEffect(()=>{
  GetFunction()
  checkPermissionsAndProceed()
  // requestCameraPermissions()
  // requestCameraPermission()
 },[])
 const checkPermissionsAndProceed = async () => {
  const hasPermission = await requestCameraPermissions();
  if (hasPermission) {
    console.log('All permissions granted ✅');
    // proceed to open camera or gallery
  } else {
    Alert.alert('Permissions Required', 'Please grant all permissions to proceed.');
  }
};

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'video', // Important to allow video selection
    })
      .then((video) => {
         setImageProfile(video); // Rename this to setVideoFile if needed
        setIsModalVisible(false);
        setUploadModal(true);
      })
      .catch((error) => {
        console.log("Gallery video error:", error);
      });
  };
   
  //   ImagePicker.openCamera({
  //     mediaType: 'video',
  //   })
  //     .then((video) => {
  //       console.log('Recorded video:', video);
  //       setImageProfile(video); // you can rename this to setVideoFile if it's only for video
  //       setIsModalVisible(false);
  //       setUploadModal(true);
  //     })
  //     .catch((error) => {
  //       console.log('Camera video error:', error);
  //     });
  // };
  const takePhotoFromCamera = async () => {
    // const permissionGranted = await requestCameraPermissions();
  
    // if (!permissionGranted) {
    //   Alert.alert('Permission Denied', 'Camera or audio permission is required.');
    //   return;
    // }
  
    ImagePicker.openCamera({
      mediaType: 'video',
      includeBase64: false,
      compressVideoPreset: 'MediumQuality',
    })
      .then((video) => {
        console.log('Recorded video:', video);
        setImageProfile(video);
        setIsModalVisible(false);
        setUploadModal(true);
      })
      .catch((error) => {
        console.log('Camera video error:', error?.message || error);
      });
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
       const response = await GetUploadFile(setLoading,"VIDEO");
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
    setUploadModal(false)
    try {
      const params = {
        img:imageProfile?.path,
         navigation: navigation,  
         type:"VIDEO"
      };
        const response = await UploadFile1(params, setLoading,);
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
    uploadFile
  };
};

export default useVideoUpload;
