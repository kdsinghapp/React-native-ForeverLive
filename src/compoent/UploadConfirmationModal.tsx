import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
 import localizationStrings from '../Localization/Localization';
import imageIndex from '../assets/imageIndex';
import { useTheme } from '../theme/ThemeProvider';

interface UploadConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  image: any; // supports uri or local asset
}

const UploadConfirmationModal: React.FC<UploadConfirmationModalProps> = ({
  visible,
  onClose,
  onConfirm,
  image,
}) => {
  const { theme }: any = useTheme();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalBox, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.text }]}>
                {localizationStrings?.upload_image_question ?? 'Upload Image?'}
              </Text>
{
  image && (
    <View style={styles.imageWrapper}>
                <Image
                  source={typeof image === 'string' ? { uri: image } : image}
                  style={styles.image}
                />
              </View>
  )
}
              
              <View style={styles.buttonRow}>
                
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.cancelText}>
                    {localizationStrings?.no ?? 'No'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                  <Text style={styles.confirmText}>
                    {localizationStrings?.yes ?? 'Yes'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  imageWrapper: {
     padding: 15,
     marginBottom: 5,
  },
  image: {
    height: 120,
    width: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 15,
    marginTop:11
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#3658AE',
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  confirmText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
});

export default UploadConfirmationModal;
