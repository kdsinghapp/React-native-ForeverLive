 import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
   StyleSheet,
  Dimensions,
 } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import CustomButton from '../CustomButton';

const { width } = Dimensions.get('window');

interface AudioModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  audioUri: string;
}

const PlayAudio: React.FC<AudioModalProps> = ({
  visible,
  onClose,
  onSubmit,
  audioUri,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
console.log("audioUri",audioUri)
  const handlePlay = async () => {
    try {
      SoundPlayer.playUrl(audioUri);
      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };
  const handleStop = () => {
    SoundPlayer.stop();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!visible) {
      handleStop();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>🎵 Audio Preview</Text>
          <Text style={styles.description}>Use the buttons below to control playback.</Text>

          <View style={styles.buttonRow}>
            
          </View>
          <View style={styles.buttonRow}>
          <CustomButton
              title={isPlaying ? "Stop" : "Play"}
              onPress={isPlaying ? handleStop : handlePlay}
          
      
            buttonStyle={{ width: "100%"  }}
          />
            
          </View>
          <View style={styles.buttonRow}>
          <CustomButton
            title= {
                "Close"
            }
            onPress={() => onClose()
            }

              // onPress={() => {
              //   navigation.navigate(ScreenNameEnum.TabNavigator)
              // }}
            buttonStyle={{ width: "100%", marginTop: 15 }}
          />
            {/* <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlayAudio;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  modalBox: {
    width: width - 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
   },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#007bff',
  },
  stopButton: {
    backgroundColor: '#ffc107',
  },
  submitButton: {
    backgroundColor: '#28a745',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
