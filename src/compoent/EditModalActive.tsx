import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  GestureResponderEvent
} from 'react-native';
import localizationStrings from '../Localization/Localization';

interface Props {
  visible: boolean;
  onClose: () => void;
  baseDuration: string;
  ratePerMinute: string;
  onChangeBaseDuration: (text: string) => void;
  onChangeRatePerMinute: (text: string) => void;
  onSubmit: (event: GestureResponderEvent) => void;
  mess: string;
  subTitle:any
}

const EditRateModal: React.FC<Props> = ({
  visible,
  onClose,
  baseDuration,
  ratePerMinute,
  onChangeBaseDuration,
  onChangeRatePerMinute,
  onSubmit,
  mess ,
  subTitle
}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <Text style={[styles.label,{
                textAlign:"center"
              }]}>{subTitle}</Text>
              <Text style={styles.label}>{localizationStrings?.base_duration}</Text>
              <TextInput
                style={styles.input}
                value={baseDuration}
                onChangeText={onChangeBaseDuration}
                placeholder= {localizationStrings?.enter_base_duration}
                keyboardType="numeric"
              />

              <Text style={styles.label}>{localizationStrings?.rate_per_minute}</Text>
              <TextInput
                style={styles.input}
                value={ratePerMinute}
                onChangeText={onChangeRatePerMinute}
                placeholder={localizationStrings?.enter_rate_per_minute}
                keyboardType="numeric"
              />

              {/* <Text style={styles.errorText}>{mess}</Text> */}

              <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                <Text style={styles.submitText}>{localizationStrings?.submit}</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditRateModal;

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
    padding: 20,
    borderRadius: 10
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    color:"black"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 5
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center'
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
