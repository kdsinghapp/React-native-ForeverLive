// import React from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// type Props = {
//   visible: boolean;
//   onClose: () => void;
//   isRecording: boolean;
//   hasRecording: boolean;
//   onStartRecording: () => void;
//   onStopRecording: () => void;
//   onPlayRecording: () => void;
//   recordingTime: number;
//   playbackTime: number;
//   totalDuration?: number;
// };

// const RecordingModal: React.FC<Props> = ({
//   visible,
//   onClose,
//   isRecording,
//   hasRecording,
//   onStartRecording,
//   onStopRecording,
//   onPlayRecording,
//   recordingTime,
//   playbackTime,
//   totalDuration,
// }) => {
//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const renderTimer = () => {
//     if (isRecording) {
//       return <Text style={styles.timerText}>Recording: {formatTime(recordingTime)}</Text>;
//     }
//     if (!isRecording && hasRecording && playbackTime > 0) {
//       return <Text style={styles.timerText}>Playing: {formatTime(playbackTime)}</Text>;
//     }
//     if (!isRecording && hasRecording && playbackTime === 0 && totalDuration !== undefined) {
//       return <Text style={styles.timerText}>Duration: {formatTime(totalDuration)}</Text>;
//     }
//     return null;
//   };

//   return (
//     <Modal transparent visible={visible} animationType="fade">
//       <View style={styles.overlay}>
//         <View style={styles.modalBox}>
//           <Text style={styles.title}>🎤 Voice Recorder</Text>

//           {/* <View style={styles.timerContainer}>{renderTimer()}</View> */}

//           {isRecording ? (
//             <TouchableOpacity style={[styles.actionButton, styles.stopButton]} onPress={onStopRecording}>
//               <Text style={styles.btnText}>⏹ Stop Recording</Text>
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity style={[styles.actionButton, styles.startButton]} onPress={onStartRecording}>
//               <Text style={styles.btnText}>🎙 Start Recording</Text>
//             </TouchableOpacity>
//           )}

//           {hasRecording && !isRecording && (
//             <TouchableOpacity style={[styles.actionButton, styles.playButton]} onPress={onPlayRecording}>
//               <Text style={styles.btnText}>▶️ Play Recording</Text>
//             </TouchableOpacity>
//           )}

//           <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
//             <Text style={styles.closeText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default RecordingModal;

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: '#000000aa',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBox: {
//     width: '85%',
//     padding: 25,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginBottom: 15,
//     color: '#333',
//   },
//   timerContainer: {
//     marginBottom: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#555',
//   },
//   actionButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//     marginVertical: 6,
//   },
//   startButton: {
//     backgroundColor: '#28a745',
//   },
//   stopButton: {
//     backgroundColor: '#dc3545',
//   },
//   playButton: {
//     backgroundColor: '#007bff',
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   closeBtn: {
//     marginTop: 20,
//   },
//   closeText: {
//     color: '#888',
//     fontSize: 15,
//   },
// });
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  isRecording: boolean;
  hasRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onPlayRecording: () => void;
  recordingTime: number;
  playbackTime: number;
  totalDuration?: number; 
  onSubmit?: ()=> void
};

const RecordingModal: React.FC<Props> = ({
  visible,
  onClose,
  isRecording,
  hasRecording,
  onStartRecording,
  onStopRecording,
  onPlayRecording,
  recordingTime,
  playbackTime,
  totalDuration,
  onSubmit
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderTimer = () => {
    if (isRecording) {
      return `Recording: ${formatTime(recordingTime)}`;
    }
    if (!isRecording && hasRecording && playbackTime > 0) {
      return `Playing: ${formatTime(playbackTime)}`;
    }
    if (!isRecording && hasRecording && playbackTime === 0 && totalDuration !== undefined) {
      return `Duration: ${formatTime(totalDuration)}`;
    }
    return '00:00';
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>🎤 Voice Recorder</Text>

          {/* <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{renderTimer()}</Text>
          </View> */}

          <View style={styles.buttonGroup}>
            {isRecording ? (
              <TouchableOpacity
                style={[styles.actionButton, styles.stopButton]}
                onPress={onStopRecording}
              >
                <Text style={styles.btnText}>⏹ Stop</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.actionButton, styles.startButton]}
                onPress={onStartRecording}
              >
                <Text style={styles.btnText}>🎙 Start</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[
                styles.actionButton,
                styles.playButton,
                !hasRecording && styles.disabledButton,
              ]}
              onPress={onPlayRecording}
              disabled={!hasRecording}
            >
              <Text style={styles.btnText}>▶️ Play</Text>
            </TouchableOpacity>
          </View>
          <View style={{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
    marginTop: 20,


}}>
          <TouchableOpacity onPress={onClose} style={{
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 8,
              alignItems: 'center',
              flex: 1,
              marginHorizontal: 5,
              backgroundColor: '#8F52CA', // Blue background

          }}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSubmit} style={{
              paddingVertical: 12,
              backgroundColor: '#3658AE', // Blue background

              paddingHorizontal: 24,
              borderRadius: 8,
              alignItems: 'center',
              flex: 1,
              marginHorizontal: 5,
          }}>
            <Text style={styles.closeText}>Submit</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default RecordingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  timerContainer: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  timerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
  },
  buttonGroup: {
    width: '100%',
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#28a745',
  },
  stopButton: {
    backgroundColor: '#dc3545',
  },
  playButton: {
    backgroundColor: '#007bff',
  },
  disabledButton: {
    backgroundColor: '#c0c0c0',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeBtn: {
    marginTop: 20,
  },
  closeText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: '600',
  },
});
