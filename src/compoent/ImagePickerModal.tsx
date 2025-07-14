import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import localizationStrings from '../Localization/Localization';
import { useTheme } from '../theme/ThemeProvider';
import CustomButton from './CustomButton';

interface ImagePickerModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  pickImageFromGallery: () => void;
  takePhotoFromCamera: () => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  modalVisible,
  setModalVisible,
  pickImageFromGallery,
  takePhotoFromCamera,
}) => {
  const { theme }: any = useTheme();

  const closeModal = () => setModalVisible(false);

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
              <View style={styles.handleBar} />

              <Text allowFontScaling={false} style={[styles.title, { color: theme.text }]}>
                {localizationStrings?.choose_option}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  closeModal();
                  pickImageFromGallery();
                }}
                style={styles.optionButton}
              >
                <Text allowFontScaling={false} style={styles.optionText}>
                  📷 {localizationStrings?.pick}
                </Text>
              </TouchableOpacity>
              {Platform.OS !== 'ios' && (
  <TouchableOpacity
    onPress={() => {
      closeModal();
      takePhotoFromCamera();
    }}
    style={styles.optionButton}
  >
    <Text allowFontScaling={false} style={styles.optionText}>
      📸 {localizationStrings?.take}
    </Text>
  </TouchableOpacity>
)}

              <CustomButton
            title= {localizationStrings?.cancel}
            onPress={closeModal} 
            buttonStyle={{ width: "100%", marginTop: 15 }}
          />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  optionButton: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  cancelButton: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ImagePickerModal;
