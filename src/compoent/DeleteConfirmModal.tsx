import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import localizationStrings from '../Localization/Localization';

interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const DeleteConfirmModal: React.FC<Props> = ({ visible, onClose, onConfirmDelete }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.title}>{localizationStrings?.delete_confirmation}</Text>
              <Text style={styles.message}>{localizationStrings?.delete_item_prompt}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.noButton} onPress={onClose}>
                  <Text style={styles.noText}>{localizationStrings?.no}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.yesButton} onPress={onConfirmDelete}>
                  <Text style={styles.yesText}>{localizationStrings?.yes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeleteConfirmModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  noButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    marginRight: 10,
    justifyContent:"center"
  },
  yesButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:"center"

  },
  noText: {
    color: 'gray',
    fontWeight: 'bold'
  },
  yesText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
