import React, {FunctionComponent} from 'react';
import {LogBox,} from 'react-native';

import 'react-native-gesture-handler';
import AppNavigator from './src/navigators/AppNavigator';
 


LogBox.ignoreAllLogs();

const App: FunctionComponent<any> = () => <AppNavigator />;

export default App;


// import React, { useState } from 'react';
// import { View, Button, PermissionsAndroid, Platform, Alert } from 'react-native';
// import RecordingModal from './components/RecordingModal';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// const audioRecorderPlayer = new AudioRecorderPlayer();

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);

//   const requestPermissions = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       ]);
//       return (
//         granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
//       );
//     }
//     return true;
//   };

//   const startRecording = async () => {
//     const hasPermission = await requestPermissions();
//     if (!hasPermission) {
//       Alert.alert('Permission denied');
//       return;
//     }

//     try {
//       const result = await audioRecorderPlayer.startRecorder();
//       setIsRecording(true);
//       console.log('Recording started at:', result);
//     } catch (error) {
//       console.error('Start error:', error);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       setIsRecording(false);
//       console.log('Recording stopped. File saved at:', result);
//       Alert.alert('Recording saved', result);
//     } catch (error) {
//       console.error('Stop error:', error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//       <Button title="Open Recorder Modal" onPress={() => setModalVisible(true)} />

//       <RecordingModal
//         visible={modalVisible}
//         onClose={() => {
//           if (isRecording) stopRecording();
//           setModalVisible(false);
//         }}
//         isRecording={isRecording}
//         onStartRecording={startRecording}
//         onStopRecording={stopRecording}
//       />
//     </View>
//   );
// };

// export default App;
