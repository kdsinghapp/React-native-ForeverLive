import React from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Modal, Pressable } from "react-native";
import EmptyListComponent from "./EmptyListComponent";
import localizationStrings from "../Localization/Localization";

interface DropdownModalProps {
  visible: boolean;
  options: string[];
  onClose: () => void;
  onSelect: (item: string) => void;
}

const DropdownModal: React.FC<DropdownModalProps> = ({ visible, options, onClose, onSelect }) => {
  console.log("options",)
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.handle} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={options}
            keyExtractor={(item, index) => index.toString()}

            ListEmptyComponent={<EmptyListComponent message={localizationStrings?.not_found_data} />} // Common Empty Component

            renderItem={({ item }: any) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.optionText}>{item?.category_name || item?.name || item?.position_name || item?.activity_name} </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>{localizationStrings?.close}</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
  },
  handle: {
    width: 20,
    height: 3,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignSelf: "center",
  },
  option: {
    padding: 5,
    borderBottomWidth: 0.8,
    borderColor: "#9DB2BF",
    alignItems: "center",
    justifyContent: "center"
  },
  optionText: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 5,
    textTransform: 'uppercase'

  },
  closeButton: {
    marginTop: 15,
    padding: 13,
    backgroundColor: "black",
    borderRadius: 15,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default DropdownModal;
