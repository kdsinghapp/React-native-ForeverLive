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
import usePhotoUpload from './usePhotoUpload';
import UploadConfirmationModal from '../../compoent/UploadConfirmationModal';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import LoadingModal from '../../utils/Loader';
 import PhotoCard from '../../compoent/card/photoCard/PhotoCard';
import localizationStrings from '../../Localization/Localization';

const PhotoUpload = () => {
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
,loading,
uploadFiles,
setImageProfile,
imgloading, setimgloading
  } = usePhotoUpload();
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}>
        <StatusBarComponent/>
        {loading ? <LoadingModal /> : null}
        <CustomHeader label={type =="PHOTO" ? "PHOTO":"Video"} imageSource={imageIndex.backImg}/>
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
      source={{ uri: imageProfile }} 
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
        {localizationStrings?.TaptoUpload}
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
      {localizationStrings?.Take}
    </Text>
  </View>
)}
        </TouchableOpacity>
      </View>

   <SearchBar placeholder="Search"/>
   <FlatList 
  showsVerticalScrollIndicator={false}
  data={videoList}
  keyExtractor={(item: any) => item?.id?.toString()}
  numColumns={3}
  style={{ marginTop: 30 }}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
  renderItem={({ item }) => <PhotoCard item={item} />}
  ListEmptyComponent={() => <EmptyListComponent />}
/>
<ImagePickerModal
  modalVisible={isModalVisible}
  setModalVisible={setIsModalVisible}
  pickImageFromGallery={pickImageFromGallery}
  takePhotoFromCamera={takePhotoFromCamera}
/>
<UploadConfirmationModal
  image={imageProfile?.path || imageProfile}
  visible={uploadModal}
  onClose={() => {
    setUploadModal(false);
    setImageProfile(null);
  }}
  onConfirm={uploadFiles}
/>
    </View>
    </SafeAreaView>
  );
};

export default PhotoUpload;
