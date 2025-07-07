import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
   FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Linking,
  } from 'react-native';
import imageIndex from '../../assets/imageIndex';
 import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import CustomButton from '../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeProvider';
import styles from './style';
 import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Alert } from 'react-native';
import RecordingModal from '../../compoent/RecordingModal';

const audioRecorderPlayer = new AudioRecorderPlayer();
const notesData = [
  { id: '1', title: 'Work/Professional', time: '19/12/2024 04:53PM' },
  { id: '2', title: 'Personal', time: '19/12/2024 04:53PM' },
  { id: '3', title: 'Creative', time: '19/12/2024 04:53PM' },
  { id: '4', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
  { id: '5', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
];

const Voice = () => {
   const [recordedPath, setRecordedPath] = useState<string | null>(null);

  const { theme }:any = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
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

  
  const startRecording = async () => {
    // const granted = await requestPermissions();
    // if (!granted) {
    //   Alert.alert('Permission denied');
    //   return;
    // }

    try {
      const uri = await audioRecorderPlayer.startRecorder();
      setIsRecording(true);
      console.log('Recording started at:', uri);
    } catch (error) {
      console.error('Recording start error:', error);
    }
  };

  const stopRecording = async () => {
    try {
      const uri = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      setRecordedPath(uri);
      console.log('Recording saved at:', uri);
    } catch (error) {
      console.error('Stop error:', error);
    }
  };
  const playRecording = async () => {
    if (recordedPath) {
      try {
        await audioRecorderPlayer.startPlayer(recordedPath);
        console.log('Playing:', recordedPath);
      } catch (error) {
        console.error('Playback error:', error);
      }
    }
  };
  const renderNote = ({ item }:any) => (
    <View style={styles.noteCard}>
      <View style={styles.iconContainer}>
        <Image
          source={imageIndex.voies} // use your icon here
          style={styles.icon}
        />
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteTime}>{item.time}</Text>
        <Text style={styles.noteTime}>Peter, Anna</Text>
      </View>
      <TouchableOpacity style={styles.arrowBtn}>
       <Image source={imageIndex.videoplay} style={{

        height:22,
        width:22,
        resizeMode:"contain"
       }}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}> 
    <StatusBarComponent/> 
    <CustomHeader label='Add a Photo Memory' imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
 
 
 
  <View style={{
    flex:1,
    justifyContent:"space-between" ,
    flexDirection:"row",
    alignItems:"center"
  }}>
  <Text style={[styles.subHeader,{
            color:theme.text

  }]}>Notes</Text>
  <Text style={[styles.subHeader,{
    color:"red",
   }]}>4 records</Text>

  </View>

      <FlatList
        data={notesData}
        style={{
            marginTop:30
        }}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
    <CustomButton
            title= {"Start Recording"}
            
            onPress={() => setModalVisible(true)
            }

            //   onPress={() => {
            //     navigation.navigate(ScreenNameEnum.TabNavigator)
            //   }}
            buttonStyle={{ marginHorizontal:15 ,marginBottom:20}}
          />
          <RecordingModal
        visible={modalVisible}
        onClose={() => {
          if (isRecording) stopRecording();
          setModalVisible(false);
        }}
        isRecording={isRecording}
        hasRecording={!!recordedPath}
        onStartRecording={startRecording}
        onStopRecording={stopRecording}
        onPlayRecording={playRecording}
      />
    </SafeAreaView>
  );
};



export default Voice;
