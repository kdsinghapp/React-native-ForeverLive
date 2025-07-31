import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
   FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
 
  } from 'react-native';
import imageIndex from '../../assets/imageIndex';
 import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import CustomButton from '../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
 import styles from './style';
 import useVoice from './useVoice';
import LoadingModal from '../../utils/Loader';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import AudioModal from '../../compoent/AudioModal/AudioModal';
import moment from 'moment';
import PlayAudio from '../../compoent/PlayAudio/PlayAudio';
import localizationStrings from '../../Localization/Localization';
 
 

const Voice = () => { 
  const {   
    navigation,
    loading,
    type,
    theme,
   
      modalVisible, setModalVisible , 
      recordedPath, setRecordedPath ,
     VoicesList ,
     uploadFile,
     handleDocumentSelection ,
     pathAudio,
     isModalVisible1, setModalVisible1
      } = useVoice()
  const renderNote = ({ item }:any) =>  {
  const createdAt = item?.created_at;
const formattedDate = moment(createdAt, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY, h:mm A");
    return(
      <View style={styles.noteCard}>
      <View style={styles.iconContainer}>
        <Image
          source={imageIndex.voies} // use your icon here
          style={styles.icon}
        />
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.noteTitle}>Audio</Text>
        <Text style={styles.noteTime}>{formattedDate}</Text>
        <Text style={styles.noteTime}>Peter, Anna</Text>
      </View>
      <TouchableOpacity  
      onPress={() => {
        setRecordedPath(item.file_path); // <-- Your audio URL here
        setModalVisible1(true);
      }}
      style={styles.arrowBtn}>
       <Image source={imageIndex.videoplay} style={{
        height:22,
        width:22,
        resizeMode:"contain"
       }}/>
      </TouchableOpacity>
    </View>
    )
  }
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}> 
      
    {loading ? <LoadingModal /> : null}
    <StatusBarComponent/> 
    <CustomHeader label={localizationStrings?.AddMemory} imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
  <View style={{
    flex:1,
    justifyContent:"space-between" ,
    flexDirection:"row",
    alignItems:"center"
  }}>
  {/* <Text style={[styles.subHeader,{
            color:theme.text

  }]}>Today</Text> */}
  {/* <Text style={[styles.subHeader,{
    color:"red",
   }]}>4 records</Text> */}

  </View>

      <FlatList
  data={VoicesList}
  style={{
            marginTop:30
        }}
        renderItem={renderNote}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        ListEmptyComponent={() => {
          return(
            <EmptyListComponent message={localizationStrings?.Notdata}/>
          )
        }}
      />
    </ScrollView>
    <CustomButton
            title= {localizationStrings?.UploadFile}
            onPress={handleDocumentSelection
            }
            buttonStyle={{ marginHorizontal:15 ,marginBottom:20}}
          />
        <AudioModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={uploadFile} 
        audioUri={pathAudio?.uri}
       />
        <PlayAudio
        visible={isModalVisible1}
        onClose={() => setModalVisible1(false)}
        onSubmit={uploadFile} 
        audioUri={recordedPath}
       />
    </SafeAreaView>
  );
};



export default Voice;
