import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import CustomHeader from '../../compoent/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../compoent/SearchBar';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
 import { useRoute } from '@react-navigation/native';
import styles from './style';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { PermissionsAndroid, Platform } from 'react-native';
import { ImageFile } from '../bottom/profile/profileScreen/editProfile/EditTypes';
import ImagePickerModal from '../../compoent/ImagePickerModal';
import ImagePicker from "react-native-image-crop-picker";
import { useTheme } from '../../theme/ThemeProvider';

 
const data = [
   { id: '2', image: 'https://e0.pxfuel.com/wallpapers/874/89/desktop-wallpaper-sad-boy-black-only-me-anime-boy-sad-anime-guy-png-transparent-depressed-anime-boy.jpg' },
  { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTTgdLCzDS8a7AEz6f2pxPv0eWOIM8ye8fA&s' },
  { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNn6S1HNuxn09o67GyaDxf-xTsHxf-YQi3OUqol_4fxku_TQLs9RDOTcCpyRWD9POw1Y&usqp=CAU' },
  { id: '5', image: 'https://img.freepik.com/premium-photo/toy-boy-with-jacket-jacket-that-says-go_849416-5260.jpg' },
  { id: '6', image: 'https://i.pinimg.com/736x/bb/34/34/bb3434a8f0527648805ba20994d4e830.jpg' },
  { id: '7', image: 'https://editingbank.com/wp-content/uploads/2025/01/Stylish-Editing-Photos-For-Boy-Background2-min.jpeg' },
  { id: '8', image: 'https://e0.pxfuel.com/wallpapers/874/89/desktop-wallpaper-sad-boy-black-only-me-anime-boy-sad-anime-guy-png-transparent-depressed-anime-boy.jpg' },
  { id: '9', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTTgdLCzDS8a7AEz6f2pxPv0eWOIM8ye8fA&s' },
   { id: '11', image: "https://i.pinimg.com/736x/b2/4c/fe/b24cfed438944920c0df8ce263f2b9f0.jpg" },
  { id: '12', image: 'https://i.pinimg.com/736x/bb/34/34/bb3434a8f0527648805ba20994d4e830.jpg' },
  { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTTgdLCzDS8a7AEz6f2pxPv0eWOIM8ye8fA&s' },
  { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNn6S1HNuxn09o67GyaDxf-xTsHxf-YQi3OUqol_4fxku_TQLs9RDOTcCpyRWD9POw1Y&usqp=CAU' },
  { id: '5', image: 'https://img.freepik.com/premium-photo/toy-boy-with-jacket-jacket-that-says-go_849416-5260.jpg' },
];

const PhotoUpload = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then((image) => {
        setImagePrfile(image)
        setIsModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const takePhotoFromCamera = async () => {
    try {
      const image: any = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: false,
      });
      setImagePrfile(image)
      setIsModalVisible(false);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };
    const rou:any= useRoute()
    const {type}= rou?.params || ""
    // useEffect(() => {
    //   requestCameraPermission()
    //  }, [])
      const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            // Android 13+ specific media permissions
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
            const isImageGranted = granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] === PermissionsAndroid.RESULTS.GRANTED ||
                                   granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED;
            const isVideoGranted = granted[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] === PermissionsAndroid.RESULTS.GRANTED;
      
            return isCameraGranted && isImageGranted && isVideoGranted;
          } catch (err) {
            console.warn(err);
            return false;
          }
        } else {
          // iOS permissions
          try {
            const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
            const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
            const micStatus = await request(PERMISSIONS.IOS.MICROPHONE); // For video recording with audio
      
            return (
              cameraStatus === RESULTS.GRANTED &&
              photoStatus === RESULTS.GRANTED &&
              micStatus === RESULTS.GRANTED
            );
          } catch (error) {
            console.warn('iOS Permission error:', error);
            return false;
          }
        }
      };
      const [imagePrfile, setImagePrfile] = useState<ImageFile | null>(null);
      const { theme }:any = useTheme();

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}>
        <StatusBarComponent/>
        <CustomHeader label={type =="PHOTO" ? "PHOTO":"Video"} imageSource={imageIndex.backImg}/>

    <View style={[styles.container,{
              backgroundColor:theme.background

    }]}>
    
      <View style={styles.uploadRow}>
        <TouchableOpacity style={styles.uploadBox} 
                onPress={()=>setIsModalVisible(true)}

        >
           <Image source={imageIndex.Upload} style={{
            height:33,
            width:33
           }}/>
          <Text style={[styles.uploadText,{
              color:theme.text

    }]}>Tap to Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBox} 
        onPress={()=>setIsModalVisible(true)}
        >
        <Image source={imageIndex.cmaera} style={{
            height:33,
            width:33
           }}/>
          <Text style={[styles.uploadText,{
                color:theme.text
          }]}>Take Photo</Text>
        </TouchableOpacity>
      </View>

   <SearchBar/>
      {/* Grid Gallery */}
      <FlatList 
      showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={{
            marginTop:30
        }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.gallery}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}
      />
                          <ImagePickerModal
                        modalVisible={isModalVisible}
                        setModalVisible={setIsModalVisible}
                        pickImageFromGallery={pickImageFromGallery}
                        takePhotoFromCamera={takePhotoFromCamera}
                    />
    </View>
    </SafeAreaView>
  );
};

export default PhotoUpload;
