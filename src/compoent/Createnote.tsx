import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
   TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import TextInputField from '../utils/TextInputField';

type Note = {
  title: string;
  description: string;
};

interface CreateNoteProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (note: Note) => void;
}

const Createnote: React.FC<CreateNoteProps> = ({ visible, onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit({ title, description });
      setTitle('');
      setDescription('');
      onClose();
    } else {
      Alert.alert('Please fill in both fields.');
    }
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.keyboardView}
          >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.modalContainer}>
                <Text style={styles.header}>Create Note</Text>
{/* 
                <TextInput
                  placeholder="Enter Title"
                  value={title}
                  onChangeText={setTitle}
                  style={styles.input}
                  returnKeyType="done"
                /> */}
 <TextInputField
               text={title}
              onChangeText={setTitle}
              placeholder={"Enter Title"}
              firstLogo={false}
             />
              <TextInputField
               text={description}
              onChangeText={setDescription}
              placeholder="Enter Description"
              firstLogo={false}
              multiline
             />
                {/* <TextInput
                  placeholder="Enter Description"
                  value={description}
                  onChangeText={setDescription}
                  style={[styles.input, { height: 100 }]}
                  multiline
                /> */}

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancel]}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.submit]}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Createnote;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 16,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginHorizontal:15
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
    color: '#3658AE',
  },
   
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
   },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cancel: {
    backgroundColor: '#f44336', // red
  },
  submit: {
    backgroundColor: '#19A3BD', // green
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

