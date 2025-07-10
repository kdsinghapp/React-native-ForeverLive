import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import localizationStrings from '../../Localization/Localization';

const { width } = Dimensions.get('window');
 
const LoadingModal = ({ visible }: any) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.overlay}>
           <LottieView
            source={require('../../assets/Animation.json')} // Your animation JSON file
            autoPlay
            loop
            style={styles.lottie}
          />
       </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: width * 0.7,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default LoadingModal;
