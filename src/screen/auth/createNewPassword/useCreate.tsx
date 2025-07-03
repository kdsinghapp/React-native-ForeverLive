import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { UpdatePassUserApi } from "../../../redux/Api/AuthApi";
import { RouteParams } from "./CreateTypes";
const useCreate = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { userId } = route.params || {}; 
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [secureText, setSecureText] = useState<boolean>(false);
  const [secureConfirmText, setSecureConfirmText] = useState<boolean>(false);
  const validateAndSubmit = async () => {
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Both fields are required.");
      return;
    }
    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    const params = {
      newPassword,
      confirmPassword,
      userId,
      navigation,
    };
    setErrorMessage("");
    await UpdatePassUserApi(params, setLoading);
  };

  return {
    navigation,
    newPassword,
    setNewPassword,
    errorMessage,
    setErrorMessage,
    confirmPassword,
    setConfirmPassword,
    loading,
    setLoading,
    validateAndSubmit,
    secureText,
    setSecureText,
    secureConfirmText,
    setSecureConfirmText,
  };
};

export default useCreate;
