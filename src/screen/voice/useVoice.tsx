import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
  import { useSelector } from 'react-redux';
import { useTheme } from '../../theme/ThemeProvider';
 import {    GetUpVoiceFile, UploadVoice,   } from '../../redux/Api/AuthApi';
  import { pick, types } from '@react-native-documents/picker';
 
const useVoice = () => {
   const navigation = useNavigation<any>();
  const route: any = useRoute();
  const { type } = route?.params || {};
  const { theme }: any = useTheme();
  const isLogin = useSelector((state: any) => state?.auth);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
   const [VoicesList, setVoicesList] = useState([]);
   const [recordedPath, setRecordedPath] = useState<string | null>(null);
   const [modalVisible, setModalVisible] = useState(false);
    const [pathAudio, setpathAudio] = useState();
   
 useEffect(()=>{
  GetFunction()
  requestPermissions()
  // requestCameraPermissions()
  // requestCameraPermission()
 },[])


useEffect(()=>{
 requestPermissions()
},[])
const requestPermissions = async () => {
 if (Platform.OS === 'android') {
   try {
     const granted = await PermissionsAndroid.requestMultiple([
       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
     ]);

     console.log("Permission Result:", granted);

     const allGranted = Object.values(granted).every(
       result => result === PermissionsAndroid.RESULTS.GRANTED
     );

     if (!allGranted) {
       // Alert.alert(
       //   'Permission required',
       //   'Microphone access is needed. Please enable it in settings.',
       //   [
       //     { text: 'Cancel', style: 'cancel' },
       //     { text: 'Open Settings', onPress: () => Linking.openSettings() },
       //   ]
       // );
       return false;
     }

     return true;
   } catch (error) {
     console.warn('Permission error:', error);
     return false;
   }
 }

 return true; // iOS
};

 
 
 
  
  const GetFunction = async () => {
    try {
       const response = await GetUpVoiceFile(setLoading);
      if (response && response.data) {
         setVoicesList(response?.data)
      } else {
        console.warn("No response or invalid response data.");
      }

    } catch (error) {
      console.error("Login error:", error);
    } finally {
     }
  };
   const handleDocumentSelection = async () => {
    try {
      const [file] = await pick({
        type: [types.audio],
        allowMultiSelection: false
      });
      setpathAudio(file)
      setModalVisible(true)

      //  SoundPlayer.playUrl(file.uri); // <-- This is why you need the import
    } catch (err:any) {
      if (err?.message?.includes('cancel')) {
        console.log('User canceled the file picker');
      } else {
        Alert.alert('Error', err.message);
      }
    }
  };  
  const uploadFile = async () => {
    setModalVisible(false)
     try {
      const params = {
          navigation: navigation,  
          Audio:pathAudio
      };
         const response = await UploadVoice(params, setLoading,);
      if (response) {
        setModalVisible(false)
        GetFunction()
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
     isModalVisible,
    setIsModalVisible,
     type ,GetFunction ,
      modalVisible, setModalVisible , 
      recordedPath, setRecordedPath ,
     VoicesList ,
     uploadFile,
     handleDocumentSelection ,
     pathAudio,
     isModalVisible1, setModalVisible1
  };
};

export default useVoice;
