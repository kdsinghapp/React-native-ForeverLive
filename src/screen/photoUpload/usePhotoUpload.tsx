import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
 import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { useTheme } from '../../theme/ThemeProvider';
import { ImageFile } from '../bottom/profile/profileScreen/editProfile/EditTypes';
import {  GetUploadFile,  UploadFile } from '../../redux/Api/AuthApi';
 import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

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
 const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

  // const pickImageFromGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: false,
  //   })
  //     .then((image) => {
        
  //       setImageProfile(image);
  //       setIsModalVisible(false);
  //       setUploadModal(true)
  //     })
  //     .catch((error) => {
  //       console.log("Gallery error:", error);
  //     });
  // };
  
  const pickImageFromGallery = async () => {
    setTimeout(() => {
      const options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 400,
        quality: 0.8,
        includeBase64: false,
      };
  
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const imageUri = response.assets?.[0]?.uri;
          console.log("image",imageUri)
          setImageProfile(imageUri)
          setUploadModal(true)
           setIsModalVisible(false);
          setIsModalVisible(false);
        }
      });
    }, 200); // Delay helps when launched from modal or state update
  };
const takePhotoFromCamera = async () => {
  if (Platform.OS === 'android') {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera permission is required.');
      return;
    }
  }

  const options = {
    mediaType: 'photo',
    cameraType: 'back',
    saveToPhotos: true,
  };

  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled camera');
    } else if (response.errorCode) {
      console.log('Camera error: ', response.errorMessage);
      Alert.alert('Camera Error', response.errorMessage || 'Unknown error');
    } else {
      const imageUri:any = response?.assets?.[0]?.uri;
      console.log('Image URI:', imageUri);
      setImageProfile(imageUri);
      setIsModalVisible(false);
      setUploadModal(true)

    }
  });
};
;

  
  // const takePhotoFromCamera = async () => {
  //   try {
  //     const hasPermission = await requestCameraPermission();
  //     if (!hasPermission) {
  //       Alert.alert("Permission Denied", "Camera permission is required.");
  //       return;
  //     }
  //     const image: any = await ImagePicker.openCamera({
  //       width: 300,
  //       height: 400,
  //       cropping: false,
  //     });
  //     // setcamerImage(image);
  //     setImageProfile(image);
  //     setIsModalVisible(false);
  //     setUploadModal(true)
  //   } catch (error: any) {
  //     Alert.alert("Error", error.message || "Camera access failed");
  //   }
  // };

  // const requestCameraPermission = async (): Promise<boolean> => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const permissions =
  //         Platform.Version >= 33
  //           ? [
  //               PermissionsAndroid.PERMISSIONS.CAMERA,
  //               PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
  //               PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
  //             ]
  //           : [
  //               PermissionsAndroid.PERMISSIONS.CAMERA,
  //               PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //               PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //             ];

  //       const granted = await PermissionsAndroid.requestMultiple(permissions);

  //       return (
  //         granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
  //         (granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] === PermissionsAndroid.RESULTS.GRANTED ||
  //           granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED) &&
  //         (granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] === PermissionsAndroid.RESULTS.GRANTED ||
  //           true)
  //       );
  //     } catch (err) {
  //       console.warn("Android permission error:", err);
  //       return false;
  //     }
  //   } else {
  //     try {
  //       const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
  //       const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
  //       const micStatus = await request(PERMISSIONS.IOS.MICROPHONE);
  //       return (
  //         cameraStatus === RESULTS.GRANTED &&
  //         photoStatus === RESULTS.GRANTED &&
  //         micStatus === RESULTS.GRANTED
  //       );
  //     } catch (error) {
  //       console.warn("iOS permission error:", error);
  //       return false;
  //     }
  //   }
  // };
  
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
  
  const uploadFiles = async () => {
    setUploadModal(false);

    try {
      const params = {
        img:imageProfile ||imageProfile,
         navigation: navigation, 
         type:"IMAGE"

      };
      setUploadModal(false);

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
    uploadFiles ,
    imgloading, setimgloading
  };
};

export default usePhotoUpload;
