import { base_url, constant } from "../../config/constant";
import ScreenNameEnum from "../../routes/screenName.enum";
import { errorToast, successToast } from "../../utils/customToast";
import { loginSuccess } from "../feature/authSlice";
 import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, ToastAndroid } from "react-native";

const LoginUserApi = async (
    param,  
    setLoading,
    dispatch) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("identity", param?.email);
         formdata.append("password", param?.password);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };
        const respons = await fetch(`${base_url}${constant.Login}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                AsyncStorage.setItem("token", response?.data?.token);
                 if (response?.status === '1') {
                    if (Platform.OS === 'android') {
                                         ToastAndroid.show(response?.message, ToastAndroid.SHORT); // Android native toast
 
                      } else {
                        successToast(response?.message);                      }
                    
                    

                        
                            dispatch(loginSuccess({
                                userData: response?.result,
                                token: response?.result?.access_token,
                            }));
 
                            param.navigation.reset({
                                index: 0,
                                routes: [{ name: ScreenNameEnum.TabNavigator }],
                            });
                            return response;
                     
 
                 
 
                   
 
 
                
                } else {
                    setLoading(false);
                    errorToast(response.message);
                    return response;
                }
 
 
            })
            .catch((error) =>
                console.error(error));
        return respons
    } catch (error) {
        setLoading(false)
        errorToast(
            'Network error',
        );
    }
};
 

 const SinupUserApi = async (param, setLoading) => {
    try {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        formData.append("mobile", param?.mobile);
        formData.append("email", param?.email);
        formData.append("full_name", param?.fullName);
        formData.append("password", param?.password);
         const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const response = await fetch(`${base_url}${constant.SignUp}`, requestOptions);
        const res = await response.text();
        const jsonResponse = JSON.parse(res);
        setLoading(false);
        if (jsonResponse?.status === "1") {
            if (Platform.OS === 'android') {
                ToastAndroid.show(response?.message, ToastAndroid.SHORT); // Android native toast

} else{
    successToast(jsonResponse?.message);

}
            param?.navigation.navigate(ScreenNameEnum.LoginScreen);
            return jsonResponse;
        } else {
            errorToast(jsonResponse?.message);
            return jsonResponse;
        }
    } catch (error) {
        setLoading(false);
        errorToast("Network error");
    }
};

const ForgotPassUserApi = async (
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("identity", param?.email);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };
        const respons = await fetch(`${base_url}${constant.ForgetPassword}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res)
                if (response?.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    if (param?.type == "Resend") {

                    }
                    else {
                        param?.navigation.navigate(ScreenNameEnum.OtpScreen, {
                            email: param?.email
                        });
                    }

                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response.message,
                    );
                    return response
                }
            })
            .catch((error) =>
                console.error(error));
        return respons
    } catch (error) {
        setLoading(false)
        errorToast(
            'Network error',
        );
    }
};
 
const Get_post_Api = async (
    setLoading ,
  ) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
   
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ⬅️ Send token properly
        },
      };
  
      const response = await fetch(`${base_url}/auth/get-profile`, requestOptions); // ✅ await here
      const responseData = await response.json(); // ✅ parse JSON
  
      if (responseData.status === "1") {
        return responseData;
      } else {
        errorToast(responseData.error || "Something went wrong");
        return null;
      }
  
    } catch (error) {
      console.error("API call error:", error);
      errorToast("Network error");
      return null;
    } finally {
      setLoading(false);
    }
  };

const OtpUserApi = async (
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("identity", param?.email);
        formdata.append("otp", param?.otp);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };
        const respons = await fetch(`${base_url}${constant.OtpVerify}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res)
                if (response?.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    param.navigation.navigate(ScreenNameEnum.CreatePassword, {
                        userId: response?.data?.user_id
                    })
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response.message,
                    );
                    return response
                }
            })
            .catch((error) =>
                console.error(error));
        return respons
    } catch (error) {
        setLoading(false)
        errorToast(
            'Network error',
        );
    }
};

const UpdatePassUserApi = async (
    param,
    setLoading,
) => {

    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("user_id", param?.userId);
        formdata.append("c_password", param?.confirmPassword);
        formdata.append("password", param?.newPassword);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };
        const respons = await fetch(`${base_url}${constant.UpdatePassword}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res)
                if (response?.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    param.navigation.navigate(ScreenNameEnum.LoginScreen)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response.message,
                    );
                    return response
                }
            })
            .catch((error) =>
                console.error(error));
        return respons
    } catch (error) {
        setLoading(false)
        errorToast(
            'Network error',
        );
    }
};
const UpdateProfile_Api = async (
    param ,
    setLoading
  ) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
      const formData = new FormData();
  
      if (param.profile) {
        formData.append("image", {
          uri: param.profile,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
      }
  if(param?.fulle){
    formData.append("full_name", param?.fulle);
  }
  if(param?.mob){
    formData.append("mobile_number", param?.mob);

  }
  if(param?.dob){
    formData.append("dob", param?.dob);

  }
  

      const response = await fetch(`${base_url}/auth/update-profile`, {
        method: "POST",
        headers: {
           'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        body: formData,
      });
  
      const text = await response.text();
      const json = JSON.parse(text);
  
      setLoading(false);
  
      if (json.status == '1') {
        successToast(json?.message);
      } else {
        errorToast(json?.message);
      }
  
      return json;
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      errorToast('Network error');
    }
  };  
  const Support_Api = async (
    data ,
    setLoading,
  ) => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");

    try {
      const formData = new FormData();
       formData.append("message", data.title);
      const response = await fetch(`${base_url}/common/ask_support`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Authorization': `Bearer ${token}`, // ⬅️ Send token properly
        },
        body: formData,
      });
  
      const result = await response.json();
       setLoading(false);
      successToast(result?.message)
      data.navigation.goBack();

  
      if (result.status == "1") {
        return result;
      } else {
        errorToast(result.error || "Something went wrong");
        return null;
      }
    } catch (error) {
      setLoading(false);
      errorToast("Network error");
      return null;
    }
  };
 
 
const PrivacyPolicyApi = async (
    setLoading,
) => {
    try {
        setLoading(true)

        const requestOptions = {
            method: "GET",
        };
        const respons = await fetch(`${base_url}${constant.getPrivacy}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response.error,
                    );
                    return response
                }
            })
            .catch((error) =>
                console.error(error));
        return respons
    } catch (error) {
        setLoading(false)
        errorToast(
            'Network error',
        );
    }
};


// const UploadFile1 = async (param, setLoading) => {
//     setLoading(true);
  
//     try {
//       const token = await AsyncStorage.getItem("token");
  
//       if (!token) {
//         throw new Error("Token not found");
//       }
  
//       const formData = new FormData();
  
//       if (param?.img) {
//         const fileExtension = param.img.split('.').pop();
//         const fileName = `video.${fileExtension}`;
  
//         formData.append("file", {
//           uri: param.img,
//           type: "video/mp4", // update as needed e.g., video/quicktime, video/mov
//           name: fileName,
//         });
//       } else {
//         throw new Error("No video file selected");
//       }
  
//       formData.append("file_type", param?.type || "VIDEO");
  
//       const response = await fetch(`${base_url}/upload-filemedia`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "multipart/form-data",
//         },
//         body: formData,
//       });
  
//       const text = await response.text();
//       console.log("Raw response text:", text);
  
//       // Safe JSON parsing
//       let json;
//       try {
//         json = JSON.parse(text);
//       } catch (parseError) {
//         throw new Error("Invalid JSON response from server");
//       }
  
//       setLoading(false);
  
//       if (json.status === "1") {
//         successToast(json.message || "Uploaded successfully");
//       } else {
//         errorToast(json.message || "Upload failed");
//       }
  
//       return json;
  
//     } catch (error) {
//       console.error("Upload error:", error.message);
//       setLoading(false);
//       errorToast(error.message || "Network error or invalid response");
//     }
//   };
  
const UploadFile1 = async (param, setLoading) => {
    try {
      setLoading(true); // Start loader
  
      const token = await AsyncStorage.getItem("token");
  
      if (!token) {
        throw new Error("User authentication token not found");
      }
  
      if (!param?.img) {
        throw new Error("No video file selected");
      }
  
      // Prepare file details
      const fileExtension = param.img.split('.').pop();
      const fileName = `video.${fileExtension}`;
  
      const formData = new FormData();
      formData.append("file", {
        uri: param.img,
        type: "video/mp4", // Update this based on file if needed
        name: fileName,
      });
      if (param?.img) {
        formData.append("image", {
          uri: param.img,
          type: "image/jpeg",
          name: "image.jpg",
        });
      }
  
      formData.append("file_type", "VIDEO");
  
      const response = await fetch(`${base_url}/upload-filemedia`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
  
      const responseText = await response.text();
   
      let json;
      try {
        json = JSON.parse(responseText);
      } catch {
        throw new Error("Server returned an invalid response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Video uploaded successfully");
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
    } catch (error) {
      console.error("Upload error:", error.message);
      errorToast(error.message || "Upload failed");
    } finally {
      setLoading(false); // Always stop loader
    }
  };
  
const UploadFile = async (param, setLoading) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token not found");
      }
  
      const formData = new FormData();
  
      if (param?.img) {
        formData.append("file", {
          uri: param.img,
          type: "image/jpeg",
          name: "image.jpg",
        });
      }
  
      formData.append("file_type","IMAGE");
 
      const response = await fetch(`${base_url}/upload-filemedia`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
       const text = await response.text();
        let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
  
      if (json.status == "1") {
        setLoading(false);

        successToast(json.message || "Uploaded successfully");
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
  
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
      errorToast("Network error or invalid response");
    }
  };
const GetUploadFile = async (setLoading,type) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token not found");
      }
  
      const formData = new FormData();
   
      formData.append("file_type", type);
  
      const response = await fetch(`${base_url}/get-files`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
  
      const text = await response.text();
  
      // Safely parse JSON
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      setLoading(false);
  
      if (json.status == "1") {
        successToast(json.message || "Uploaded successfully");
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
  
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
      errorToast("Network error or invalid response");
    }
  };
  
  
  const GetUpVoiceFile = async (setLoading) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token not found");
      }
      const formData = new FormData();

      formData.append("file_type", "AUDIO");
  
      const response = await fetch(`${base_url}/get-files`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
  
      const text = await response.text();
  
      // Safely parse JSON
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      setLoading(false);
  
      if (json.status == "1") {
        successToast(json.message || "Uploaded successfully");
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
  
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
      errorToast("Network error or invalid response");
    }
  };
  const GetNote = async (setLoading) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token not found");
  
      const response = await fetch(`${base_url}/notes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
  
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Fetched notes successfully");
      } else {
        errorToast(json.message || "Failed to fetch notes");
      }
  
      return json;
    } catch (error) {
      console.error("Fetch notes error:", error);
      errorToast("Network error or invalid response");
    } finally {
      setLoading(false);
    }
  };
  




  const CreateNoteSave = async (setLoading, param) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token not found");
  
      const formData = new FormData(); // ✅ Declare formData properly
      formData.append("title", param?.title);
      formData.append("description", param?.description);
  
      const response = await fetch(`${base_url}/create-note`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          // Do NOT manually set Content-Type for FormData; the browser/app will handle it with correct boundary
        },
        body: formData, // ✅ Send the form data
      });
  
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Note saved successfully");
      } else {
        errorToast(json.message || "Failed to save note");
      }
  
      return json;
    } catch (error) {
      console.error("CreateNoteSave error:", error);
      errorToast("Network error or invalid response");
    } finally {
      setLoading(false);
    }
  };
  


  const UploadVoice = async (param, setLoading) => {
    try {
      setLoading(true);
  
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("User authentication token not found");
  
      if (!param?.Audio.uri) throw new Error("No audio file selected");
  
      let uri = param?.Audio.uri;
      if (Platform.OS === "android" && uri.startsWith("file:////")) {
        uri = uri.replace("file:////", "file:///");
      }
      const formData = new FormData();
      formData.append("file", {
        uri: uri,
        type: param?.Audio.type,
        name: param?.Audio.name,
      });
  
      formData.append("file_type", "AUDIO");
  console.log("formData",formData)
      const response = await fetch(`${base_url}/upload-filemedia`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });
      console.log("response3 44:", response);

      const responseText = await response.text();
      console.log("Upload Response Text:", responseText);
  
      let json;
            console.log("json 44:", json);

      try {
        json = JSON.parse(responseText);
      } catch (e) {
        throw new Error("Server returned an invalid response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Audio uploaded successfully");
      } else {
        console.error("111 error:", error);

        errorToast(json.message || "Upload failed");
      }
  
      return json;
    } catch (error) {
      console.error("Upload error:", error);
      errorToast(error.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };
  
  const GetPlan_Api = async (setLoading) => {
    setLoading(true);
  
    try {
      const token = await AsyncStorage.getItem("token");
  
      const response = await fetch(`${base_url}/common/plans`, {
        method: 'GET', // ✅ Use GET method for fetching
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const responseData = await response.json();
  
      if (responseData.status === "1") {
        successToast(responseData.message);

        return responseData;

      } else {
        errorToast(responseData.error || "Something went wrong");
        return null;
      }
  
    } catch (error) {
      console.error("API call error:", error);
      errorToast("Network error");
      return null;
    } finally {
      setLoading(false);
    }
  };









  const AddgmailMob = async (params,setLoading) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
     const formData = new FormData();
      formData.append("contact", params?.filed);
      formData.append("type", params?.type);
      const response = await fetch(`${base_url}/add-network`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
  
      const text = await response.text();
  
      // Safely parse JSON
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      setLoading(false);
  
      if (json.status == "1") {
        successToast(json.message || "Uploaded successfully");
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
  
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
      errorToast("Network error or invalid response");
    }
  };
  


  const NetworksApi = async (setLoading) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token not found");
      const response = await fetch(`${base_url}/networks`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
  
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Fetched notes successfully");
      } else {
        errorToast(json.message || "Failed to fetch notes");
      }
  
      return json;
    } catch (error) {
      console.error("Fetch notes error:", error);
      errorToast("Network error or invalid response");
    } finally {
      setLoading(false);
    }
  };
  const GetRequestApi = async (setLoading) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token not found");
      const response = await fetch(`${base_url}/get-requests`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
  
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Fetched notes successfully");
      } else {
        errorToast(json.message || "Failed to fetch notes");
      }
  
      return json;
    } catch (error) {
      console.error("Fetch notes error:", error);
      errorToast("Network error or invalid response");
    } finally {
      setLoading(false);
    }
  }; 





  const AcceptApi = async (param, setLoading) => {
    try {
      setLoading(true);
  
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("User authentication token not found");
  
      const formData = new FormData();
      formData.append("status", param.status);
      formData.append("id", param.userId);
  
      const response = await fetch(`${base_url}/request-status-change`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });
  
      const responseText = await response.text();
  
      let json;
      try {
        json = JSON.parse(responseText);
        console.log("Response JSON:", json);
      } catch (e) {
        throw new Error("Server returned an invalid response");
      }
  
      if (json.status === "1") {
        successToast(json.message);
      } else {
        errorToast(json.message || "Upload failed");
      }
  
      return json;
    } catch (error) {
      console.error("Upload error:", error);
      errorToast(error.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };
  
  
  const getUserdata = async (setLoading,id) => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token not found");
  
      const response = await fetch(`${base_url}/get-userdata`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
        }),
      });
  
      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (parseError) {
        throw new Error("Invalid server response");
      }
  
      if (json.status === "1") {
        successToast(json.message || "Fetched notes successfully");
      } else {
        errorToast(json.message || "Failed to fetch notes");
      }
  
      return json;
    } catch (error) {
      console.error("Fetch notes error:", error);
      errorToast("Network error or invalid response");
    } finally {
      setLoading(false);
    }
  };
  

export {GetRequestApi,getUserdata,AcceptApi,CreateNoteSave,NetworksApi,AddgmailMob,GetPlan_Api,UploadVoice,GetUpVoiceFile,Get_post_Api,UploadFile1,GetNote,UploadFile,GetUploadFile,PrivacyPolicyApi, Support_Api,  LoginUserApi, UpdateProfile_Api, SinupUserApi, ForgotPassUserApi, OtpUserApi, UpdatePassUserApi }  