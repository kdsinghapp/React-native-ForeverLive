import React  from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import CustomHeader from '../../compoent/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../compoent/SearchBar';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import styles from './style';
import ImagePickerModal from '../../compoent/ImagePickerModal';
import usePhotoUpload from './useVideoUpload';
import UploadConfirmationModal from '../../compoent/UploadConfirmationModal';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import LoadingModal from '../../utils/Loader';
import ScreenNameEnum from '../../routes/screenName.enum';
 

const VideoUpload = () => {
  const {
    imageProfile,
    isModalVisible,
    setIsModalVisible,
    pickImageFromGallery,
    takePhotoFromCamera,
    theme,
    type,
    camerImage,
    uploadModal, setUploadModal,
    videoList
,
loading,
navigation,
uploadFile,
   } = usePhotoUpload();
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}>
            {loading ? <LoadingModal /> : null}

        <StatusBarComponent/>
        <CustomHeader label={"Video"} imageSource={imageIndex.backImg}/>

    <View style={[styles.container,{
              backgroundColor:theme.background

    }]}>
    
      <View style={styles.uploadRow}>
      <TouchableOpacity 
  style={styles.uploadBox} 
  onPress={() => setIsModalVisible(true)}
>
  {imageProfile ? (
    <Image 
      source={{ uri: imageProfile.path }} 
      style={{ height: 60, width: 60 }} 
      resizeMode="cover" 
    />
  ) : (
    <View style={{ alignItems: 'center' }}>
      <Image 
        source={imageIndex.Upload} 
        style={{ height: 33, width: 33 }} 
      />
      <Text style={[styles.uploadText, { color: theme.text }]}>
      Upload a Video
      </Text>
    </View>
  )}
</TouchableOpacity>

        <TouchableOpacity style={styles.uploadBox} 
        onPress={takePhotoFromCamera}
        >
         {camerImage ? (
  <Image 
    source={{ uri: camerImage?.path }} 
    style={{ height: 60, width: 60 }}
    resizeMode='cover' 
  />
) : (
  <View style={{ alignItems: 'center' }}>
    <Image 
      source={imageIndex.cmaera} 
      style={{ height: 33, width: 33 }} 
    />
    <Text style={[styles.uploadText, { color: theme.text }]}>
    Record 
    </Text>
  </View>
)}

      
        </TouchableOpacity>
      </View>

   <SearchBar placeholder="Search"/>
       <FlatList 
  showsVerticalScrollIndicator={false}
  data={videoList}
  keyExtractor={(item:any) => item?.id?.toString()}
  numColumns={3}
  style={{ marginTop: 30 }}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
   renderItem={({ item }) =>  {
    console.log("item",item)
    return(
      <TouchableOpacity onPress={()=>{
        navigation.navigate(ScreenNameEnum.VideoPlay,{
          item:item?.file_path
        })
      }}>
              <Image source={imageIndex?.play} style={styles.image} />


      </TouchableOpacity>
    )
  }}
  ListEmptyComponent={() => {
    return(
      <EmptyListComponent/>
    )
  }}
/>

<ImagePickerModal
  modalVisible={isModalVisible}
  setModalVisible={setIsModalVisible}
  pickImageFromGallery={pickImageFromGallery}
  takePhotoFromCamera={takePhotoFromCamera}
/>
<UploadConfirmationModal
  // image={imageProfile?.path || camerImage?.path}
  visible={uploadModal}
  onClose={() => {
    setUploadModal(false);
    // setImageProfile("");
  }}
  onConfirm={uploadFile}
/>


    </View>
    </SafeAreaView>
  );
};

export default VideoUpload;
