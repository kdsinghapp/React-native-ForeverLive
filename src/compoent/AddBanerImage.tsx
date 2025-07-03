import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import localizationStrings from '../Localization/Localization';

const AddBanerImage = ({ visible, imageUri, onClose ,openImage,onCloseModal}:any) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay}  onPress={onCloseModal}>
        <View style={styles.modalContainer}>
          <View>
          <Text style={styles.title}>{localizationStrings?.selected_banner_image}</Text>
          </View>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <TouchableOpacity style={styles.noImageBox} onPress={openImage}>
              <Text style={styles.noImageText}>{localizationStrings?.no_image_selected}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={onClose} activeOpacity={0.7}>
            <Text style={styles.buttonText}>{localizationStrings?.submit}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddBanerImage;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    maxWidth: 350,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 12,
    marginBottom: 30,
    resizeMode: 'cover',
    backgroundColor: '#f0f0f0',
  },
  noImageBox: {
    width: 280,
    height: 180,
    borderRadius: 12,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  noImageText: {
    color: '#777',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
