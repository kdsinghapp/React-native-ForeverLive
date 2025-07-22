import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import useEdit from "./useEdit";
import styles from "./style";
import CustomButton from "../../../../../compoent/CustomButton";
import TextInputField from "../../../../../utils/TextInputField";
import StatusBarComponent from "../../../../../compoent/StatusBarCompoent";
import LoadingModal from "../../../../../utils/Loader";
import ResponsiveSize from "../../../../../utils/ResponsiveSize";
import CustomHeader from "../../../../../compoent/CustomHeader";
import imageIndex from "../../../../../assets/imageIndex";
import ImagePickerModal from "../../../../../compoent/ImagePickerModal";
 import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../../../theme/ThemeProvider";
import DatePicker from 'react-native-date-picker';

 const EditProfile = () => {
    const {
         isLoading,
         takePhotoFromCamera,
        pickImageFromGallery,
        isModalVisible, setIsModalVisible,
        handleSubmit,
        credentials, 
        handleChange ,
        date, setDate ,
        open, setOpen,
        isLogin,
        imageProfile

    } = useEdit()
    const { theme }:any = useTheme();

    return (
        <SafeAreaView style={[styles.mainView,{
            backgroundColor:theme.background
        }]}
        >
                   <CustomHeader imageSource={imageIndex.backImg} label={"Profile Info"}/>
                <StatusBarComponent />

        <View
            style={[styles.mainView,{
                backgroundColor:theme.background

            }]}
        >
            {isLoading ? <LoadingModal /> : null}
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}  >
                    <View style={styles.profileContainer}>
                        <View style={styles.iamgeView}>
                            <Image
                                resizeMode="cover"
                                source={
                                    imageProfile
                                      ? { uri: imageProfile }
                                      : isLogin?.userData?.user_data.image
                                      ? { uri: isLogin?.userData?.user_data.image }
                                      :  {uri:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"}
                                  }
                               
                                style={{ width: 100, height: 100,borderWidth:1 ,borderRadius:100,borderColor:'#9DB2BF'}}
                              
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setIsModalVisible(true)}
                            style={{ bottom: ResponsiveSize.height(25), alignItems: "center", justifyContent: "center", height: 30, width: 30, borderRadius: 30 }}>
                            <Image
                                source={imageIndex.editpic}
                                // tintColor={"#EBBEB"}
                                style={{ height: ResponsiveSize.height(28), width: ResponsiveSize.width(28), left: 25 }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                    <View  >
                        <TextInputField
                              placeholder={"FullName"}
                            firstLogo={false}
                            img={imageIndex.prfoile}
                            text={credentials.fullName}
                            onChangeText={(value: string) => handleChange('fullName', value)} 
                        />
                    </View>
                        <TextInputField
                             placeholder={"Email"}
                             firstLogo={false}
                             text={credentials.email}
                             onChangeText={(value: string) => handleChange('email', value)} 
                         />

                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <TextInputField
                            type={"decimal-pad"}
                             placeholder={"Mobile"}
                             firstLogo={false}
                             img={imageIndex.prfoile}
                             text={credentials.mobile}
                             onChangeText={(value: string) => handleChange('mobile', value)} 
                        />
                    </View>
                    <TouchableOpacity 
                     onPress={() => setOpen(true)}
                    style={{ marginHorizontal: 15 }}>
                        <TextInputField
                              placeholder={date.toLocaleDateString()}
                            firstLogo={false}
                            editable={false}
                            img={imageIndex.prfoile}
                            // onChangeText={setPhoneNumber}
                            // text={PhoneNumber}
                        />
                    </TouchableOpacity>
                </ScrollView >
                    <ImagePickerModal
                        modalVisible={isModalVisible}
                        setModalVisible={setIsModalVisible}
                        pickImageFromGallery={pickImageFromGallery}
                        takePhotoFromCamera={takePhotoFromCamera}
                    />

                <View style={styles.buttView}>
                    <CustomButton title={"update"} 
                    
                      onPress={() => handleSubmit()}
                     />
                </View>
                <DatePicker
        modal
        open={open}
        date={date}
        mode="date" // or "time" or "datetime"
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
                {/* <CountryCodeModal
        visible={isModalVisible}
        onSelect={handleCountrySelect}
        onClose={() => setCountryModal(false)}
      /> */}

         
        </View>
        </SafeAreaView>
    );
};

export default EditProfile;

