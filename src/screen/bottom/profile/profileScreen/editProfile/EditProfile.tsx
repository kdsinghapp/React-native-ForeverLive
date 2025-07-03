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
import localizationStrings from "../../../../../Localization/Localization";
import { SafeAreaView } from "react-native-safe-area-context";
 const EditProfile = () => {
    const {
        imagePrfile,
        isLoading,
        navigation,
        takePhotoFromCamera,
        pickImageFromGallery,
        isModalVisible, setIsModalVisible,
        fullName, setFullName,
        PhoneNumber, setPhoneNumber,
        handleSubmit,
        getLogin,
        email, setEmail
 
    } = useEdit()

    return (
        <SafeAreaView style={styles.mainView}
        >
                            <CustomHeader imageSource={imageIndex.backImg} label={"Profile Info"}/>
                <StatusBarComponent />

        <View
            style={styles.mainView}
        >
            {isLoading ? <LoadingModal /> : null}
           
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}  >
                    <View style={styles.profileContainer}>
                        <View style={styles.iamgeView}>
                            <Image
                                resizeMode="cover"
                                source={
                                    imagePrfile
                                      ? { uri: imagePrfile.path }
                                      : getLogin?.userGetData?.image
                                      ? { uri: getLogin.userGetData.image }
                                      :  {uri:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"}
                                  }
                                // source={imagePrfile ? { uri: imagePrfile?.path } : { uri: getLogin?.userGetData?.image }}
                                // style={{
                                //     borderColor: "#9DB2BF",
                                //     height: ResponsiveSize.height(100), width: ResponsiveSize.width(100), borderRadius: 100, borderWidth: 1
                                // }}
                                style={{ width: 100, height: 100,borderWidth:1 ,borderRadius:100,borderColor:'#9DB2BF'}}
                                // resizeMode="cover"
                              
                            />
                        </View>
                        <TouchableOpacity
                            // onPress={() => setIsModalVisible(true)}
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
 
                              placeholder={"Martin Mango"}
                            firstLogo={false}
                            img={imageIndex.prfoile}
                            onChangeText={setEmail}
                            text={email}
                            editable={false}
                            
                        />
                    </View>
                        <TextInputField
                             placeholder={"MartinMango@gmail.com"}
                             firstLogo={false}
                             img={imageIndex.prfoile}
                            onChangeText={setFullName}
                            text={fullName}
                        />

                    </View>
                    

                    <View style={{ marginHorizontal: 15 }}>
                        <TextInputField
                            type={"decimal-pad"}
                             placeholder={"9856741236"}
                             firstLogo={false}
                             img={imageIndex.prfoile}
                            onChangeText={setPhoneNumber}
                            text={PhoneNumber}
                        />
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <TextInputField
                            type={"decimal-pad"}
                             placeholder={"12/02/2025"}
                            firstLogo={false}
                            img={imageIndex.prfoile}
                            onChangeText={setPhoneNumber}
                            text={PhoneNumber}
                        />
                    </View>
                </ScrollView >
                    <ImagePickerModal
                        modalVisible={isModalVisible}
                        setModalVisible={setIsModalVisible}
                        pickImageFromGallery={pickImageFromGallery}
                        takePhotoFromCamera={takePhotoFromCamera}
                    />

                <View style={styles.buttView}>
                    <CustomButton title={localizationStrings?.update} 
                    
                    // onPress={() => handleSubmit()}
                    onPress={()=>navigation.goBack()}
                    />
                </View>
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

