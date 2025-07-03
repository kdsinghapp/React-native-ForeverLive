import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import CustomHeader from '../../compoent/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../compoent/SearchBar';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import font from '../../theme/font';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

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
    const rou= useRoute()
    const {type}= rou?.params || ""
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:"white"
    }}>
        <StatusBarComponent/>
        <CustomHeader label={type =="PHOTO" ? "PHOTO":"Video"} imageSource={imageIndex.backImg}/>

    <View style={styles.container}>
    
      <View style={styles.uploadRow}>
        <TouchableOpacity style={styles.uploadBox}>
           <Image source={imageIndex.Upload} style={{
            height:33,
            width:33
           }}/>
          <Text style={styles.uploadText}>Tap to Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBox}>
        <Image source={imageIndex.cmaera} style={{
            height:33,
            width:33
           }}/>
          <Text style={styles.uploadText}>Take Photo</Text>
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
    </View>
    </SafeAreaView>
  );
};

export default PhotoUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
   },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  uploadBox: {
    width: (width - 48) / 2,
    height: 80,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#A685E2',
    borderStyle: 'dashed',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    fontSize: 24,
  },
  uploadText: {
    fontSize: 14,
    marginTop: 5,
    color:"balck",
    fontFamily:font.PoppinsRegular
  },
  searchInput: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  gallery: {
    gap: 10,
  },
  image: {
    width: (width - 48) / 3,
    height: 120,
    borderRadius: 20,
    marginBottom: 12,
  },
});
