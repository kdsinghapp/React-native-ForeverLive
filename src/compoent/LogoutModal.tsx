import React from "react";
import {
  Modal,
  View,
  Text,
   StyleSheet,
  Dimensions,
   Platform,
} from "react-native";
import imageIndex from "../assets/imageIndex";
import localizationStrings from "../Localization/Localization";
import CustomButton from "./CustomButton";
import { useTheme } from "../theme/ThemeProvider";

 
type LogoutModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onClose, onConfirm }) => {
  
  const { theme }:any = useTheme();

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent,{
          backgroundColor:theme.background
        }]}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />

          {/* Close Button */}
          {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Image source={imageIndex.close} style={{ height: 24, width: 24 }} />
          </TouchableOpacity> */}

          {/* Modal Title & Message */}
          <Text style={[styles.title,{
            color:theme.text
          }]}>Log Out?</Text>
          <Text style={styles.subtitle}>{localizationStrings?.logout_confirmation}</Text>

          {/* Logout Button */}
          {/* <TouchableOpacity style={styles.logoutButton} onPress={onConfirm}>
            <Text style={styles.logo
            utText}>{localizationStrings?.logout}</Text>
          </TouchableOpacity> */}
         <CustomButton
            title= {"Yes Log out"}
            onPress={onConfirm}

           
            buttonStyle={{ width: "100%", marginTop: 15 }}
          />
          <Text  
          onPress={onClose}
          style={{
            textAlign:"center",
            marginTop:15,
            marginBottom:11,
            color:"#3658AE" ,
            fontSize:14
          }}>Cancel</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 1)",
    lineHeight: 36,
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(157, 178, 191, 1)",
    marginBottom: 20,
    lineHeight: 24,
    marginTop: 8,
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 55,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 16,
  },
  logoutText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
  },
});

export default LogoutModal;
