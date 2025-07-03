import { base_url, constant } from "../../config/constant";
import ScreenNameEnum from "../../routes/screenName.enum";
import { errorToast, successToast } from "../../utils/customToast";
import { loginSuccess } from "../feature/authSlice";
import { getSuccess } from "../feature/authGetSlice";

const LoginUserApi = async (
    param,  
    setLoading,
    dispatch) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("email", param?.email);
        formdata.append("type", param?.usertype);
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
                 if (response?.status === '1') {
                    if (response.result.step === "0") {
                        if (response.result.type == "User") {
                            successToast(response?.message);
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
                            param.navigation.navigate(ScreenNameEnum.AddService, {
                                item: response?.result
                            });
                            setLoading(false);
                            return response;
                        }
 
                    }
 
 
                    if (response.result.step === "1") {
                        param.navigation.navigate(ScreenNameEnum.AddDocument, {
                            item: response?.result
                        });
                        setLoading(false);
                        return response;
                    }
                    if (response.result.step === "2") {
                        successToast(response?.message);
 
                        dispatch(loginSuccess({
                            userData: response?.result,
                            token: response?.result?.access_token,
                        }));
 
                        param.navigation.reset({
                            index: 0,
                            routes: [{ name: ScreenNameEnum.TabNavigator }],
                        });
                        return response;
                    }
 
                    setLoading(false);
 
 
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
 

// const LoginUserApi = async (
//     param,
//     setLoading,
//     dispatch) => {
//     try {
//         setLoading(true)
//         const myHeaders = new Headers();
//         myHeaders.append("Accept", "application/json");
//         const formdata = new FormData();
//         formdata.append("email", param?.email);
//         formdata.append("type", param?.usertype);
//         formdata.append("password", param?.password);
//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: formdata,
//         };
//         const respons = await fetch(`${base_url}${constant.Login}`, requestOptions)
//             .then((response) => response.text())
//             .then((res) => {
//                 const response = JSON.parse(res);
 
//                 if (response?.status === '1') {
//                     if (response.result.step === "0") {
//                         if (response.result.type == "User") {
//                             successToast(response?.message);
//                             dispatch(loginSuccess({
//                                 userData: response?.result,
//                                 token: response?.result?.access_token,
//                             }));

//                             param.navigation.reset({
//                                 index: 0,
//                                 routes: [{ name: ScreenNameEnum.TabNavigator }],
//                             });
//                             return response;
//                         } else {
//                             param.navigation.navigate(ScreenNameEnum.AddService, {
//                                 item: response?.result
//                             });
//                             setLoading(false);
//                             return response;
//                         }

//                     }


//                     if (response.result.step === "1") {
//                         param.navigation.navigate(ScreenNameEnum.AddDocument, {
//                             item: response?.result
//                         });
//                         setLoading(false);
//                         return response;
//                     }
  
//                     if (response.result.step === "2") {
//                         successToast(response?.message);

//                         dispatch(loginSuccess({
//                             userData: response?.result,
//                             token: response?.result?.access_token,
//                         }));

//                         param.navigation.reset({
//                             index: 0,
//                             routes: [{ name: ScreenNameEnum.TabNavigator }],
//                         });
//                         return response;
//                     }
//                     if (response.result.step === "1") {
//                         successToast(response?.message);

//                         dispatch(loginSuccess({
//                             userData: response?.result,
//                             token: response?.result?.access_token,
//                         }));

//                         param.navigation.reset({
//                             index: 0,
//                             routes: [{ name: ScreenNameEnum.TabNavigator }],
//                         });
//                         return response;
//                     }
//                     setLoading(false);


//                     return response;
//                 } else {
//                     setLoading(false);
//                     errorToast(response.message);
//                     return response;
//                 }


//             })
//             .catch((error) =>
//                 console.error(error));
//         return respons
//     } catch (error) {
//         setLoading(false)
//         errorToast(
//             'Network error',
//         );
//     }
// };

//     param,
//     setLoading,
//     dispatch) => {
//     try {
//         setLoading(true)
//         const myHeaders = new Headers();
//         myHeaders.append("Accept", "application/json");
//         const formdata = new FormData();
//         formdata.append("email", param?.email);
//         formdata.append("type", param?.usertype);
//         formdata.append("password", param?.password);
//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: formdata,
//         };
//         const respons = await fetch(`${base_url}${constant.Login}`, requestOptions)
//             .then((response) => response.text())
//             .then((res) => {
//                 console.log("response", res);
//                 const response = JSON.parse(res)
//                 if (response?.status == '1') {
//                     if (response.step == "0") {
//                         param.navigation.navigate(ScreenNameEnum.AddService);
//                     }
//                     setLoading(false)
//                     successToast(
//                         response?.message
//                     );
//                     dispatch(loginSuccess({ userData: response?.result, token: response?.result?.access_token, }));
//                     param.navigation.reset({
//                         index: 0,
//                         routes: [{ name: ScreenNameEnum.TabNavigator }],
//                     });
//                     return response
//                 } else {
//                     setLoading(false)
//                     errorToast(
//                         response.message,
//                     );
//                     return response
//                 }
//             })
//             .catch((error) =>
//                 console.error(error));
//         return respons
//     } catch (error) {
//         setLoading(false)
//         errorToast(
//             'Network error',
//         );
//     }
// };
const SinupUserApi = async (param, setLoading) => {
    try {
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        formData.append("mobile", param?.mobile);
        formData.append("email", param?.email);
        formData.append("user_name", param?.fullName);
        formData.append("password", param?.password);
        formData.append("type", param?.roleType);
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
            successToast(jsonResponse?.message);
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
        formdata.append("email", param?.email);
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



const AddServies = async (param, setLoading) => {
    console.log("param.MulImage", param.MulImage)
    try {
        setLoading(true);
        const formData = new FormData();
        formData.append("user_id", param.user_id);
        formData.append("cat_id", param.cat_id);
        formData.append("description", param.description);
        formData.append("title", param.title);
        formData.append("address", param.address);
        formData.append("lat", param.lat);
        formData.append("lon", param.lon);
        formData.append("per_person_price", param.person_price || 0);
        formData.append("phone_number", param.phone);
        formData.append("email", param.email);
        formData.append("price", param.price);
        formData.append("time_availability", JSON.stringify(param.time_availability));
        param?.MulImage.forEach((image, index) => {
            console.log("image ----", image);
            formData.append(`images[]`, {
                uri: image.image, // 👈 Corrected this line
                type: 'image/jpeg',
                name: `image_${index}.jpg`  // giving unique name is still good
            });
        });
        // param.MulImage.forEach((image, index) => {
        //     // Create a unique name for each image
        //     const uniqueImageName = `image_${index}.jpg`;
        //     formData.append("images", {
        //         uri: image.image,  // Ensure this is the path to the image
        //         type: 'image/jpeg',
        //         name: uniqueImageName
        //     });
        // });

        console.log("formData --", formData);

        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        };

        const response = await fetch(`${base_url}${constant.addServiceWithTime}`, requestOptions);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
console.log("result",result)
        if (result?.status === "1") {
            // param.navigation.navigate(ScreenNameEnum.AddDocument, {
            //     item: result?.result
            // });
            param.navigation.goBack();
            

            successToast(result.message);

        } else {
            errorToast(result.message);
        }
        console.log("222",result)

        setLoading(false);
        return result;
    } catch (error) {
        setLoading(false);
        console.error("Network error:", error);
        errorToast("Network error");
    }
};

const UpdateTime
= async (param, setLoading) => {
     try {
        setLoading(true);
        const formData = new FormData();
        formData.append("post_id", param.user_id);
        formData.append("day_of_week", param?.timeAvailability?.day_of_week);
        formData.append("morning_start", param?.timeAvailability?.morning_start);
        formData.append("morning_end", param?.timeAvailability?.morning_end);
        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        };
        const response = await fetch(`${base_url}${constant.updateOrInsertTimeByDay}`, requestOptions);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        if (result?.status === "1") {
            param.navigation.navigate(ScreenNameEnum.TabNavigator);
            successToast(result.message);
        } else {
            errorToast(result.message);
        }

        setLoading(false);
        return result;
    } catch (error) {
        setLoading(false);
        console.error("Network error:", error);
        errorToast("Network error");
    }
};

const Book_service
= async (param, setLoading) => {
     try {
        setLoading(true);
        const formData = new FormData();
        formData.append("user_id", param?.userId);
        formData.append("sub_services_id", param?.sub_services_id);
        formData.append("date", param?.date);
        formData.append("amount", param?.amount);
        formData.append("time", param?.time);
        formData.append("seller_id", param?.sellerid);
        formData.append("payment_type", param?.Paymenttype);
        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        };
        console.log("1111- formData",formData)
        const response = await fetch(`${base_url}${constant.book_service}`, requestOptions);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        console.log("11111",response)
         if (result?.status === "1") {
              param.navigation.navigate(ScreenNameEnum.TabNavigator);
          successToast("Booking successful");
        } else {
            errorToast(result.message);
 
        }
        setLoading(false);
        return result;
    } catch (error) {
        console.log("error",error)

        setLoading(false);
        console.error("Network error:", error);
        errorToast("Network error");
    }
};



const OnlineBook_service = async (params, setLoading) => {
    try {
      setLoading(true);
  
      // Define query parameters
      
  
      const response = await fetch(
        `https://server-php-8-3.technorizen.com/Inside/api/app_launch_paywall?user_id=4&sub_services_id=2&service_id=10&date=Tuesday,%20May%2027,%202025&time=11:00%20PM&amount=26&seller_id=3`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
  
      const resultText = await response.text();
      const result = JSON.parse(resultText);
  
      if (result?.status === "1") {
        successToast("Booking successful");
      } else {
        errorToast(result?.message || "Booking failed");
      }
  
      return result;
    } catch (error) {
      console.error("Booking error:", error);
      errorToast("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  
const SubAddServies = async (param, setLoading) => {
     try {
        setLoading(true);
        const formData = new FormData();
        formData.append("user_id", param.user_id);
        formData.append("cat_id", param.cat_id);
        formData.append("description", param.description);
        formData.append("title", param.title);
        formData.append("address", param.address);
        formData.append("lat", param.lat);
        formData.append("lon", param.lon);
        formData.append("per_person_price", param.person_price);
        formData.append("phone_number", param.phone);
        formData.append("email", param.email);
        formData.append("price", param.price);
        formData.append("time_availability", JSON.stringify(param.time_availability));
        param.MulImage.forEach((image, index) => {
            console.log("image ----", image);
            formData.append(`images[]`, {
                uri: image.image, // 👈 Corrected this line
                type: 'image/jpeg',
                name: `image_${index}.jpg`  // giving unique name is still good
            });
        });
         const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        };

        const response = await fetch(`${base_url}${constant.addServiceWithTime}`, requestOptions);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
console.log("result -- ",result)
        if (result?.status === "1") {
            param.navigation.goBack();

            successToast(result.message);

        } else {
            errorToast(result.message);
        }

        setLoading(false);
        return result;
    } catch (error) {
        setLoading(false);
        console.error("Network error:", error);
        errorToast("Network error");
    }
};

const AddsellerCategory = async (param, setLoading) => {
     try {
        setLoading(true);
        const formData = new FormData();
        formData.append("seller_id", param.seller);
        formData.append("category_name", param.categoryName);
        formData.append("description", param.description);
        if (param?.image) {
            formData.append("image", {
                uri: param?.image?.path,
                type: 'image/jpeg',
                name: 'image.jpg'
            });
        }
        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        };

        const response = await fetch(`${base_url}${constant.addSellerCategory}`, requestOptions);
        const resultText = await response.text();
        const result = JSON.parse(resultText);

        if (result?.status === "1") {
            param.navigation.goBack();

            successToast(result.message);

        } else {
            errorToast(result.message);
        }

        setLoading(false);
        return result;
    } catch (error) {
        setLoading(false);
        console.error("Network error:", error);
        errorToast("Network error");
    }
};



const   AddSubCategory = async (param, setLoading) => {
    try {
       setLoading(true);
       const formData = new FormData();
       formData.append("user_id", param?.userid);
       formData.append("activities_id", param?.activitiesid);
       formData.append("activity_name", param?.activity_name);
        if (param?.image) {
           formData.append("activity_image", {
               uri: param?.image?.path,
               type: 'image/jpeg',
               name: 'image.jpg'
           });
       }
       const requestOptions = {
           method: "POST",
           headers: {
               Accept: "application/json"
           },
           body: formData
       };

       const response = await fetch(`${base_url}${constant.addSubActivity}`, requestOptions);
       const resultText = await response.text();
       const result = JSON.parse(resultText);
 
       if (result?.status === "1") {
           param.navigation.goBack();
 
           successToast(result.message);

       } else {
           errorToast(result.message);
       }

       setLoading(false);
       return result;
   } catch (error) {
       setLoading(false);
       console.error("Network error:", error);
       errorToast("Network error");
   }
};
// const AddServies = async (param, setLoading) => {
//     console.log("param.MulImage",param.MulImage)
//      try {
//         setLoading(true);
//         const formData = new FormData();
//         formData.append("user_id", param.user_id);
//         formData.append("cat_id", param.cat_id);
//         formData.append("description", param.description);
//         formData.append("title", param.title);
//         formData.append("address", param.address);
//         formData.append("lat", param.lat);
//         formData.append("lon", param.lon);
//         formData.append("per_person_price", param.person_price);
//         formData.append("phone_number", param.phone);
//         formData.append("email", param.email);
//         formData.append("price", param.price);
//         formData.append("time_availability", JSON.stringify(param.time_availability));
//           param.MulImage.forEach((image, index) => {
//             console.log("image ----",image),
//             formData.append(`images`, {
//                 uri: image.uri,
//                 type: 'image/jpeg',
//                 name: `image.jpg`  // Give each image a unique name
//             });
//         });
//         console.log("formData --",formData);

//         const requestOptions = {
//             method: "POST",
//             headers: {
//                 Accept: "application/json"
//             },
//             body: formData
//         };

//         const response = await fetch(`${base_url}${constant.addServiceWithTime}`, requestOptions);
//         const resultText = await response.text();
//         const result = JSON.parse(resultText);

//         if (result?.status === "1") {
//             param.navigation.navigate(ScreenNameEnum.AddDocument, {
//                 item: result?.result
//             });

//             successToast(result.message);

//         } else {
//             errorToast(result.message);
//         }

//         setLoading(false);
//         return result;
//     } catch (error) {
//         setLoading(false);
//         console.error("Network error:", error);
//         errorToast("Network error");
//     }
// };


const OtpUserApi = async (
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("email", param?.email);
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
                        userId: response?.result?.id
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
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        console.log("param?.images?.path", param?.images?.path);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        if (param?.images) {
            formData.append("image", {
                uri: param?.images?.path,
                type: 'image/jpeg',
                name: 'image.jpg'
            });
        }
        formData.append("user_name", param?.name ?? '');
        formData.append("user_id", param?.userId);
        formData.append("user_name", param?.name);
        formData.append("mobile", param?.mobiles);
        formData.append("email", param?.email);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const respons = await fetch(`${base_url}${constant.updateProfile}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    param.navigation.goBack()
                    // param.navigation.navigate(ScreenNameEnum.TabNavigator)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response?.message || response?.error,
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
const AddSellerDocument = async (param, setLoading) => {
    try {
        setLoading(true);

        const formData = new FormData();

        if (param?.certificateDoc) {
            formData.append("certificate", {
                uri: param.certificateDoc,
                type: 'image/jpeg',
                name: 'certificate.jpg',
            });
        }

        if (param?.tradeLicenseDoc) {
            formData.append("trade_license", {
                uri: param.tradeLicenseDoc,
                type: 'image/jpeg',
                name: 'trade_license.jpg',
            });
        }

        if (param?.identityDocument) {
            formData.append("identity", {
                uri: param.identityDocument,
                type: 'image/jpeg',
                name: 'identity.jpg',
            });
        }

        formData.append("seller_id", param.userId);

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };

        const response = await fetch(`${base_url}${constant.addSellerDocument}`, requestOptions);
        const textResponse = await response.text();
        const jsonResponse = JSON.parse(textResponse);
        setLoading(false);
        if (jsonResponse.status === '1') {
            successToast(jsonResponse.message);
            param.navigation.goBack();
        } else {
            errorToast(jsonResponse.message || jsonResponse.error);
        }
        return jsonResponse;
    } catch (error) {
        console.error("Upload Error:", error);
        setLoading(false);
        errorToast('Network error');
    }
};

const DeleteDoc = async (param, setLoading) => {
    try {
        setLoading(true);

        const formData = new FormData();


        formData.append("seller_id", param.userId);
        formData.append("type", param.type);

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };

        const response = await fetch(`${base_url}${constant.delete_seller_documents}`, requestOptions);
        const textResponse = await response.text();
        const jsonResponse = JSON.parse(textResponse);
        setLoading(false);
        if (jsonResponse.status === '1') {
            successToast(jsonResponse.message);
            param.navigation.goBack();
        } else {
            errorToast(jsonResponse.message || jsonResponse.error);
        }
        return jsonResponse;
    } catch (error) {
        console.error("Upload Error:", error);
        setLoading(false);
        errorToast('Network error');
    }
};



const UpdeSellerDocument = async (param, setLoading) => {
    try {
        setLoading(true);

        const formData = new FormData();

        if (param?.certificateDoc) {
            formData.append("certificate", {
                uri: param.certificateDoc,
                type: 'image/jpeg',
                name: 'certificate.jpg',
            });
        }

        if (param?.tradeLicenseDoc) {
            formData.append("trade_license", {
                uri: param.tradeLicenseDoc,
                type: 'image/jpeg',
                name: 'trade_license.jpg',
            });
        }

        if (param?.identityDocument) {
            formData.append("identity", {
                uri: param.identityDocument,
                type: 'image/jpeg',
                name: 'identity.jpg',
            });
        }

        formData.append("seller_id", param.userId);

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };

        const response = await fetch(`${base_url}${constant.update_seller_document}`, requestOptions);
        const textResponse = await response.text();
        const jsonResponse = JSON.parse(textResponse);
        setLoading(false);
        if (jsonResponse.status === '1') {
            successToast(jsonResponse.message);
            param.navigation.goBack();
        } else {
            errorToast(jsonResponse.message || jsonResponse.error);
        }
        return jsonResponse;
    } catch (error) {
        console.error("Upload Error:", error);
        setLoading(false);
        errorToast('Network error');
    }
};






const GetProfile = async (userId, dispatch) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = new FormData();
        formdata.append("user_id", userId);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
        };
        const response = await fetch(`${base_url}${constant.getrofile}`, requestOptions)
        const resText = await response.text(); // Ensure text is received before parsing
        const responseData = JSON.parse(resText);
        if (responseData.status === '1') {
            dispatch(
                getSuccess({
                    userGetData: responseData.result,
                })
            );
            return { userGetData: responseData.result };
        } else {
            errorToast(responseData.message);
        }
    } catch (error) {
        errorToast('Network error');
    }
};

const GetaboutusePolicyApi = async (
    setLoading,
) => {
    try {
        setLoading(true)

        const requestOptions = {
            method: "GET",
        };
        const respons = await fetch(`${base_url}${constant.getAboutUs}`, requestOptions)
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


const AddContactUs = async (
    data,
    setLoading,
    id,
) => {

    try {
        setLoading(true)
        const formData = new FormData();
        const myHeaders = new Headers();
        formData.append("user_id", id);
        formData.append("name", data?.name);
        formData.append("email", data?.email);
        formData.append("mobile", data?.mobile);
        formData.append("message", data?.message);
        console.log("formData", formData)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const respons = await fetch(`${base_url}${constant.AddContact_us}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false);
                    successToast(
                        response?.message
                    );
                    data.navigation.navigate(ScreenNameEnum.BOTTOM_TAB)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response?.message || response?.error,
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


const ChangePasswordApi = async (
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        formData.append("user_id", param?.userId);
        formData.append("password", param?.password);
        formData.append("confirm_password", param?.confirm_password);
        formData.append("old_password", param?.currentPass);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const respons = await fetch(`${base_url}${constant.changePassword}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    param.navigation.navigate(ScreenNameEnum.BOTTOM_TAB)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response?.message || response?.error,
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

const GetCategory = async (setLoading) => {
    setLoading(true)
    try {
        const response = await fetch(`${base_url}${constant.getCategory}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const responseData = await response.json();
        setLoading(false);
        return responseData;

    } catch (error) {
        setLoading(false);

        return null;
    } finally {
        setLoading(false);
    }
};

const GetActive = async (setLoading) => {
    setLoading(true)
    try {
        const response = await fetch(`${base_url}${constant.getActivites}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const responseData = await response.json();
        setLoading(false);
        return responseData;

    } catch (error) {
        setLoading(false);

        return null;
    } finally {
        setLoading(false);
    }
};
const GetBanner = async (setLoading) => {
    setLoading(true)
    try {
        const response = await fetch(`${base_url}${constant.getBanner}`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const responseData = await response.json();
        setLoading(false);
        return responseData;

    } catch (error) {
        errorToast(
            response?.message || response?.error,
        );
        setLoading(false);

        return null;
    } finally {
        setLoading(false);
    }
};



const GetAllServices = async (setLoading) => {
    setLoading(true)
    try {
        const response = await fetch(`${base_url}${constant.getallServices}`, {
            method: "POST",
        });
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const responseData = await response.json();
        setLoading(false);
        return responseData;

    } catch (error) {
        errorToast(
            response?.message || response?.error,
        );
        setLoading(false);

        return null;
    } finally {
        setLoading(false);
    }
};
const GetpostCity = async (setLoading) => {
    setLoading(true)
    try {
        const response = await fetch(`${base_url}${constant.getPostcity}`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const responseData = await response.json();
        setLoading(false);
        return responseData;

    } catch (error) {
        errorToast(
            response?.message || response?.error,
        );
        setLoading(false);

        return null;
    } finally {
        setLoading(false);
    }
};

const FavoriteServices = async (
    item,
    setLoading,
    userId
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        formData.append("user_id", userId);
        formData.append("post_id", item?.id);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const respons = await fetch(`${base_url}${constant.togglePostSave}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message || response?.error,
                    );
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response?.message || response?.error,
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

const FavoriteUser = async (setLoading, userId) => {
    setLoading(true);

    try {
        const formData = new FormData();
        formData.append("user_id", userId); // yahan pe dynamic userId use kar rahe hain

        const response = await fetch(`${base_url}${constant.getallServices}`, {
            method: "POST",
            body: formData,
            headers: {
                // Content-Type mat dena FormData ke sath — browser khud set karta hai
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};


const GetServiesData = async (setLoading, Itemid, userId) => {
    setLoading(true);
console.log("Itemid.id",Itemid.id)
    try {
        const formData = new FormData();
        formData.append("cat_id", Itemid.id); // yahan pe dynamic userId use kar rahe hain

        const response = await fetch(`${base_url}${constant.getServicesByCategory}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
console.log("responseData",responseData)
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};

const EditVendorActivity = async (setLoading, parms) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("base_duration", parms?.baseDur);
        formData.append("rate_per_minute", parms?.rate);
        formData.append("id", parms?.id); // Dynamic ID passed from caller
        const response = await fetch(`${base_url}${constant.editSellerVendorActivity}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        console.log("responseData", responseData)
        if (responseData.status == "1") {
            successToast(responseData.message);
        }
        return responseData;

    } catch (error) {
        errorToast(error.message || "An unexpected error occurred.");
        return null;

    } finally {
        setLoading(false);
    }
};

const BanerAddImage = async (setLoading, parms) => {
    setLoading(true);
    try {
        const formData = new FormData();
        if (parms?.image) {
            formData.append("image", {
                uri: parms?.image?.path,
                type: 'image/jpeg',
                name: 'image.jpg'
            });
        }
         formData.append("service_id", parms?.ID); // Dynamic ID passed from caller
         const response = await fetch(`${base_url}${constant.addImageToServiceGallery
        }`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });
         const responseData = await response.json();
         if (responseData.status == "1") {
            successToast(responseData.message);
        }
        return responseData;

    } catch (error) {
        errorToast(error.message || "An unexpected error occurred.");
        return null;

    } finally {
        setLoading(false);
    }
};

const DeleteBanerImage = async (setLoading, parms) => {
    setLoading(true);
    try {
        const formData = new FormData();
         formData.append("image_id", parms?.idImage); // Dynamic ID passed from caller
        const response = await fetch(`${base_url}${constant.deleteImageFromServiceGallery
        }`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });
         const responseData = await response.json();
         if (responseData.status == "1") {
            successToast(responseData.message);
        }
        return responseData;

    } catch (error) {
        errorToast(error.message || "An unexpected error occurred.");
        return null;

    } finally {
        setLoading(false);
    }
};
const AddVendorActivity = async (setLoading, parms) => {
    setLoading(true);
 
  
      try {
        const formData = new FormData();
     
        formData.append("sub_activities_id",parms?.subCategory);
      formData.append("service_id", parms?.category);
       formData.append("activities_id", parms?.activity_id);
       formData.append("base_duration", parms?.baseDur);
       formData.append("rate_per_minute", parms?.rate);
     
        const response = await fetch(`${base_url}${constant.addSellerVendorActivity}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        if (responseData.status == "1") {
            parms.navigation.goBack()
            successToast(responseData.message);
        }
        return responseData;

    } catch (error) {
        errorToast(error.message || "An unexpected error occurred.");
        return null;

    } finally {
        setLoading(false);
    }
};

const DeleteSellerVendorActivityid = async (setLoading, id,navigation) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("id", id?.seller_vendor_activities_id);
        const response = await fetch(`${base_url}${constant.deleteSellerVendorActivity}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        if (responseData.status == "1") {
            // navigation.navigate(ScreenNameEnum.TabNavigator)
            successToast(responseData.message);
        }
        return responseData;

    } catch (error) {
        errorToast(error.message || "An unexpected error occurred.");
        return null;

    } finally {
        setLoading(false);
    }
};


{/* <Text style={styles.optionText}>{item?.name || item?.name || item?.position_name || item?.activity_name} </Text> */}

const GetServicesSellerAndCategory = async (setLoading, Itemid, userId) => {
    setLoading(true);
    console.log("userId", userId)
    console.log("Itemid.", Itemid.id)
    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
         formData.append("cat_id", Itemid.id); // yahan pe dynamic userId use kar rahe hain
        const response = await fetch(`${base_url}${constant.getServicesBySellerAndCategory}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        console.log("responseData",)

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};


const SellerBokingList = async (setLoading,  userId) => {
    setLoading(true);

 
    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.get_booking_list}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
 
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};



const PaymentHistoryApi = async (setLoading, userId) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("owner_id", userId);
  
      const response = await fetch(`${base_url}${constant.getTransactionsByOwner}`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || "Failed to fetch transactions");
      }
  
      console.log("API Response:", responseData);
      return responseData;
  
    } catch (error) {
      console.error("Error in PaymentHistoryApi:", error);
      errorToast(error.message || "An unexpected error occurred");
      return null;
  
    } finally {
      setLoading(false);
    }
  };
  
const RequestPaymentApi = async (setLoading, userId,amount) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("owner_id", userId);
      formData.append("amount", amount);
      const response = await fetch(`${base_url}${constant.requestPayment}`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });
      const responseData = await response.json();
       if (responseData.status == 1) {
       successToast(responseData?.message)
      }
      if (responseData.status == 0) {
       errorToast(responseData?.message)
      }
  
   
    } catch (error) {
      console.error("Error in PaymentHistoryApi:", error);
      errorToast(error.message || "An unexpected error occurred");
      return null;
  
    } finally {
      setLoading(false);
    }
  };
  

const BookingCount = async (setLoading,  userId) => {
    setLoading(true);

 
    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.get_seller_count_list}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
 
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};





const ApointmentApicall = async (setLoading,  userId) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("user_id", userId); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.user_bookings_with_services}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
 
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};

const Add_ratesUserSilde = async (setLoading,parms) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("user_id", parms?.userId); // yahan pe dynamic userId use kar rahe hain
        formData.append("services_id", parms?.servicesid); // yahan pe dynamic userId use kar rahe hain
        formData.append("rating", parms?.rating); // yahan pe dynamic userId use kar rahe hain
        formData.append("review", parms?.review); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.add_rates}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });
        const responseData = await response.json();
         if(responseData?.status ==1){
            successToast(responseData?.result)
        }
 
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};
const CancelAppointement = async (setLoading,parms) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("booking_id", parms?.servicesid); // yahan pe dynamic userId use kar rahe hain
          const response = await fetch(`${base_url}${constant.user_booking_cancel}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });
        const responseData = await response.json();
        console.log("responseData",responseData)
         if(responseData?.status ==1){
            successToast(responseData?.message)
        }
 
        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};

const updateBookingstatus = async (setLoading,type,bokingid) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("booking_id", bokingid); // yahan pe dynamic userId use kar rahe hain
        formData.append("action", type); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.update_booking_status}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });
        const responseData = await response.json();
        console.log("response?.status",response)
        if (response?.status =="1") {
            successToast(response?.message);
         }
        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};



const BokingList = async (setLoading, Itemid, userId) => {
    setLoading(true);

 
    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
         const response = await fetch(`${base_url}${constant.getServicesBySellerAndCategory}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        console.log("responseData",)

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};


const getSubCatActive = async (id) => {
 
    try {
        const response = await fetch(`https://server-php-8-3.technorizen.com/Inside/api/get_sub_activites?activities_id=${id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();
        console.log("Sub Activities Response:", responseData);

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch sub activities");
        }

        return responseData;

    } catch (error) {
        console.error("Error in fetchSubActivities:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;
    } finally {
     }
};


const GetCityData = async (setLoading, Itemid) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("city_id", Itemid.id); // yahan pe dynamic userId use kar rahe hain
        const response = await fetch(`${base_url}${constant.getServicesByCity}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};


const GetServiceDataById = async (setLoading, date, Itemid, userId) => {
    setLoading(true);
    try {
        const formData = new FormData();
        formData.append("service_id", Itemid.id); // yahan pe dynamic userId use kar rahe hain
        formData.append("date", date); // yahan pe dynamic userId use kar rahe hain
        const response = await fetch(`${base_url}${constant.getServiceById}`, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};

const AddfeedbackApi = async (
    param,
    setLoading,
) => {
    try {
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formData = new FormData();
        formData.append("user_id", param?.userId);
        formData.append("rating", param?.rating);
        formData.append("feedback", param?.messs);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const respons = await fetch(`${base_url}${constant.Addfeedback}`, requestOptions)
            .then((response) => response.text())
            .then((res) => {
                const response = JSON.parse(res);
                if (response.status == '1') {
                    setLoading(false)
                    successToast(
                        response?.message
                    );
                    param.navigation.goBack()
                    // param.navigation.navigate(ScreenNameEnum.TabNavigator)
                    return response
                } else {
                    setLoading(false)
                    errorToast(
                        response?.message || response?.error,
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





const GetAllPackage = async (setLoading) => {
    setLoading(true);

    try {
        const response = await fetch(`${base_url}${constant.get_package}`, {
            method: "GET",
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch packages");
        }

        return responseData;
    } catch (error) {
        console.error("Error in GetAllPackage:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;
    } finally {
        setLoading(false);
    }
};


const SellerServies = async (setLoading, userId) => {
    setLoading(true);

    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
        const response = await fetch(`${base_url}${constant.getallServices}`, {
            method: "POST",
            body: formData,
            headers: {
                // Content-Type mat dena FormData ke sath — browser khud set karta hai
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};






const SellerViewDoc = async (setLoading, userId) => {
    setLoading(true);

    try {
        const formData = new FormData();
        formData.append("seller_id", userId); // yahan pe dynamic userId use kar rahe hain
        const response = await fetch(`${base_url}${constant.get_seller_document}`, {
            method: "POST",
            body: formData,
            headers: {
                // Content-Type mat dena FormData ke sath — browser khud set karta hai
                "Accept": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "Failed to fetch services");
        }

        return responseData;

    } catch (error) {
        console.error("Error in FavoriteUser:", error);
        errorToast(error.message || "An unexpected error occurred");
        return null;

    } finally {
        setLoading(false);
    }
};

export {BanerAddImage,RequestPaymentApi,PaymentHistoryApi,DeleteBanerImage,updateBookingstatus,OnlineBook_service, CancelAppointement,Add_ratesUserSilde,BookingCount,ApointmentApicall, UpdateTime,BokingList,PrivacyPolicyApi,GetActive,Book_service,AddSubCategory,SellerBokingList, AddVendorActivity, SubAddServies,AddsellerCategory, getSubCatActive, EditVendorActivity, DeleteSellerVendorActivityid, AddServies, DeleteDoc, GetServicesSellerAndCategory, SellerServies, UpdeSellerDocument, AddSellerDocument, GetServiceDataById, GetCityData, GetAllPackage, FavoriteServices, SellerViewDoc, GetServiesData, FavoriteUser, AddfeedbackApi, GetAllServices, GetBanner, GetpostCity, GetCategory, GetaboutusePolicyApi, AddContactUs, ChangePasswordApi, LoginUserApi, UpdateProfile_Api, GetProfile, SinupUserApi, ForgotPassUserApi, OtpUserApi, UpdatePassUserApi }  