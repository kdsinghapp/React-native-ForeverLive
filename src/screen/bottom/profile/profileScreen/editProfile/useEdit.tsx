import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { Get_post_Api, UpdateProfile_Api } from '../../../../../redux/Api/AuthApi';
import { loginSuccess } from '../../../../../redux/feature/authSlice';
import { ImageFile } from './EditTypes';

const useEdit = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLogin = useSelector((state: any) => state?.auth);
  const getLogin = useSelector((state: any) => state?.feature);

  const [imageProfile, setImageProfile] = useState<ImageFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    country: 'United Arab Emirates',
    code: '+971',
    flag: '🇦🇪',
  });

  const [credentials, setCredentials] = useState({
    email: '',
    fullName: '',
    mobile: '',
  });

  useEffect(() => {
    const user = isLogin?.userData?.user_data;
    if (user) {
      setCredentials({
        email: user.email || '',
        fullName: user.full_name || '',
        mobile: user.mobile_number || '',
      });
    }
  }, [isLogin?.userData?.user_data]);

  useEffect(() => {
    if (Platform.OS === 'android') requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const permissions = Platform.Version >= 33
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

        const isCameraGranted = granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED;
        const isImageGranted = 
          granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] === PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED;

        const isVideoGranted = 
          granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] === PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED;

        if (!isCameraGranted || !isImageGranted || !isVideoGranted) {
          Alert.alert('Permission Denied', 'Camera or media permissions were denied.');
        }
      } else {
        const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
        const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        const micStatus = await request(PERMISSIONS.IOS.MICROPHONE);

        if (cameraStatus !== RESULTS.GRANTED || photoStatus !== RESULTS.GRANTED || micStatus !== RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Please allow camera, photo, and microphone access in Settings.');
        }
      }
    } catch (err) {
      console.warn('Permission error:', err);
    }
  };

  const handleChange = (field: keyof typeof credentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const handleCountrySelect = (countryData: any) => {
    setSelectedCountry(countryData);
    setCountryModal(false);
  };

  const pickImageFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({ width: 300, height: 400, cropping: false });
      setImageProfile(image);
      setIsModalVisible(false);
    } catch (error) {
      console.log('Image Picker Error:', error);
    }
  };

  const takePhotoFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({ width: 300, height: 400, cropping: false });
      setImageProfile(image);
      setIsModalVisible(false);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await Get_post_Api(setIsLoading);
      if (response?.data) {
        dispatch(loginSuccess({
          userData: response.data,
          token: response.data.token,
        }));
      } else {
        console.warn("Invalid response data.");
      }
    } catch (error) {
      console.error("Fetch user error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const params = {
        mob: credentials.mobile,
        fulle: credentials.fullName,
        navigation: navigation,
        profile: imageProfile?.path,
        dob: date.toLocaleDateString(),
      };

      console.log("Submitting params:", params);

      const response = await UpdateProfile_Api(params, setIsLoading);
      if (response) {
        fetchUserData();
      }
    } catch (error) {
      console.error("Update profile error:", error);
    }
  };

  return {
    imageProfile,
    isLoading,
    navigation,
    takePhotoFromCamera,
    pickImageFromGallery,
    isModalVisible,
    setIsModalVisible,
    handleSubmit,
    getLogin,
    countryModal,
    setCountryModal,
    selectedCountry,
    setSelectedCountry,
    handleCountrySelect,
    credentials,
    setCredentials,
    handleChange,
    date,
    setDate,
    open,
    setOpen,
    isLogin,
  };
};

export default useEdit;
