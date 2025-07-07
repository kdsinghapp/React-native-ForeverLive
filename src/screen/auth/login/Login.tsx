import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
   ImageBackground,
} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInputField from '../../../utils/TextInputField';
import Loading from '../../../utils/Loader';
import StatusBarCompoent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import { styles } from '../loginStyle';
import ResponsiveSize from '../../../utils/ResponsiveSize';
import CustomButton from '../../../compoent/CustomButton';
import ScreenNameEnum from '../../../routes/screenName.enum';
import Styles from './style';
import useLogin from './useLogin';
 import localizationStrings from '../../../Localization/Localization';
import font from '../../../theme/font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';
 import { Alert } from 'react-native';
// import ReactNativeBiometrics from 'react-native-biometrics';

export default function Login() {
  const {
    navigation,
    LoginFunction,
    loading,
    handleIdentityText,
    handlePassText,
    emailError,
    passwordError,
     email, password } = useLogin()
     const { theme }:any = useTheme();
    //  const checkBiometric = async () => {
    //   const rnBiometrics = new ReactNativeBiometrics();
    //   const { available, biometryType } = await rnBiometrics.isSensorAvailable();
    
    //   if (available) {
    //     console.log('Biometric available:', biometryType); // logs: FaceID, TouchID, Biometrics
    
    //     rnBiometrics.simplePrompt({ promptMessage: 'Unlock with biometrics' })
    //       .then(resultObject => {
    //         const { success } = resultObject;
    
    //         if (success) {
    //           Alert.alert('Success', 'Authenticated with biometrics!');
    //         } else {
    //           Alert.alert('Cancelled', 'User cancelled the biometric prompt.');
    //         }
    //       })
    //       .catch(() => {
    //         Alert.alert('Error', 'Biometric authentication failed.');
    //       });
    //   } else {
    //     Alert.alert('Unavailable', 'Biometric auth not available on this device.');
    //   }
    // };
    
    // const checkBiometric = async () => {
    //   const rnBiometrics = new ReactNativeBiometrics();
    //   const { available, biometryType } = await rnBiometrics.isSensorAvailable();
  
    //   if (available) {
    //     console.log('Biometric available:', biometryType);
  
    //     rnBiometrics
    //       .simplePrompt({ promptMessage: 'Unlock with biometrics' })
    //       .then(resultObject => {
    //         const { success } = resultObject;
  
    //         if (success) {
    //           Alert.alert('Success', 'Authenticated with biometrics!');
    //         } else {
    //           Alert.alert('Cancelled', 'User cancelled the biometric prompt.');
    //         }
    //       })
    //       .catch(() => {
    //         Alert.alert('Error', 'Biometric authentication failed.');
    //       });
    //   } else {
    //     Alert.alert('Unavailable', 'Biometric auth not available on this device.');
    //   }
    // };
  
  return (
    <SafeAreaView style={[Styles.mainView,{
      backgroundColor:theme.background
    }]}>
      <StatusBarCompoent backgroundColor='white' />
      {loading ? <Loading /> : null}
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            padding: 15,
            flex: 1,
            marginTop: hp(7)
          }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

            <Image
              source={imageIndex.appLogLogin} 
               style={{ height: 80, width: 180 }} resizeMode='contain'
            />
          </View>
          <View style={{ marginTop: 22 }}>
            <Text style={[styles.txtHeading,{
                    color:theme.text

            }]}>{localizationStrings?.login}</Text>
            <Text style={[styles.txtsubHeading, {
              fontFamily: font.PoppinsRegular,
              color:"#9DB2BF" ,
              fontSize:16,
            }]}>
              {localizationStrings?.login_prompt}
             </Text>
          </View>
          <View style={{ marginTop: ResponsiveSize.marginTop(20), paddingVertical: hp(1), }}>
            <TextInputField
               // text={email}
              // onChangeText={handleIdentityText}
              placeholder={localizationStrings?.email}
              firstLogo={true}
              img={imageIndex.sms}
            />
            {emailError ? <Text style={Styles.redText}>{emailError}</Text> : null}
            <TextInputField
               // text={password}
              // onChangeText={handlePassText}
              placeholder={localizationStrings?.password}
              firstLogo={true}
              showEye={true}
              img={imageIndex.lock}
            />
            {passwordError ? <Text style={Styles.redText}>{passwordError}</Text> : null}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ScreenNameEnum.PasswordReset)
              }}
              style={{
                marginTop: 10,
              }}>
              <Text
                style={Styles.pass}>
             {localizationStrings?.reset_password}
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title= {localizationStrings?.login}
            // onPress={() => LoginFunction()
            // }

              onPress={() => {
                navigation.navigate(ScreenNameEnum.TabNavigator)
              }}
            buttonStyle={{ width: "100%", marginTop: 15 }}
          />


<View
        style={Styles.titlView}>
        <Text style={{
          fontSize: 16,   color: '#909090', fontFamily: font.PoppinsMedium,
          marginTop:12
        }}>
           {localizationStrings?.dont_have_account} {""}
        </Text>
        <TouchableOpacity
     
          onPress={() => {
            navigation.navigate(ScreenNameEnum.SignUpScreen)
          }}>
          <Text style={{
 fontSize: 16,                color:"#3658AE" ,
 fontFamily: font.PoppinsMedium,
 marginTop:12

          }}>{localizationStrings?.sign_up}</Text>
        </TouchableOpacity>
      </View>

          <Text style={{ lineHeight: 16, marginTop: 15, marginBottom: 12, fontSize: 16, color: "rgba(0, 0, 0, 1)", textAlign: "center", fontWeight: "500" }}>Or</Text>
          <View style={{ marginTop: 25, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <TouchableOpacity >
              <Image
                source={imageIndex.face}
                style={{
                  height: 40,
                  width: 83, // Set a fixed width to maintain aspect ratio
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate(ScreenNameEnum.FingerprintScreen)}>
              <Image
                source={imageIndex.face1}
                style={{
                  height: 40,
                  width: 83, // Set a fixed width to maintain aspect ratio
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
     


<TouchableOpacity  

style={Styles.titlView} 

// onPress={checkBiometric}

>

          <ImageBackground source={imageIndex.google} 
          
          style={{
            height:57,
            width:362
          }}
          >

          </ImageBackground>
    
      </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
  );
}




