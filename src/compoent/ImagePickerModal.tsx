import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import localizationStrings from '../Localization/Localization';
import { useTheme } from '../theme/ThemeProvider';

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
  const { theme }:any = useTheme();

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={[styles.modalOverlay]}>
          <View style={[styles.modalContainer,{
            backgroundColor:theme.background
          }]}>
            <View style={styles.handleBar} />
            <Text allowFontScaling={false} style={[styles.title,{
                color:theme.text
            }]}>{localizationStrings?.choose_option}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                pickImageFromGallery();
              }}
              style={styles.optionButton}
            >
              <Text allowFontScaling={false} style={[styles.optionText,{
                            // color:theme.text

              }]}>📷  {localizationStrings?.pick_from_gallery}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                // takePhotoFromCamera();
              }}
              style={styles.optionButton}
            >
              <Text allowFontScaling={false} style={[styles.optionText,]}>📸 {localizationStrings?.take_photo}</Text>
            </TouchableOpacity> 

          </View>
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
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:"center"
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
    color: '#3658AE',
    marginBottom: 10,
  },
  optionButton: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:"center"
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cancelButton: {
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});

export default ImagePickerModal;
