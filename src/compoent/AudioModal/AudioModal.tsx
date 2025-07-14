import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
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

const AudioModal: React.FC<AudioModalProps> = ({
  visible,
  onClose,
  onSubmit,
  audioUri,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>🎧 Audio Preview</Text>
          <Text style={styles.description}>Tap play to listen to your audio.</Text>

          {/* Play/Stop Button */}
             <CustomButton
              title={isPlaying ? 'Stop Audio' : 'Play Audio'}
              onPress={isPlaying ? handleStop : handlePlay}
             />
 
          {/* Submit & Close Buttons */}
          <View style={styles.actionButtonsRow}>
            <CustomButton
              title="Submit"
              onPress={onSubmit}
             />
            <CustomButton
              title="Close"
              onPress={onClose}
             />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AudioModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    color: '#222',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },
  singleButtonWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  submitBtn: {
    backgroundColor: '#28a745',
  },
  cancelBtn: {
    backgroundColor: '#dc3545',
  },
});
