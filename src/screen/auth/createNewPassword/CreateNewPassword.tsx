import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
   TextInput,
} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Loading from '../../../utils/Loader';
import StatusBarCompoent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import { styles } from '../loginStyle';
import ResponsiveSize from '../../../utils/ResponsiveSize';
import CustomButton from '../../../compoent/CustomButton';
import CustomHeader from '../../../compoent/CustomHeader';
import useCreate from './useCreate';
import Styles from './style';
import localizationStrings from '../../../Localization/Localization';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';

export default function CreateNewPassword() {

  const {
    newPassword, setNewPassword,
    errorMessage,
    confirmPassword, setConfirmPassword,
    loading,
    validateAndSubmit,
    secureText, setSecureText,
    secureConfirmText, setSecureConfirmText ,
    navigation
  } = useCreate()
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:theme.background
    }}>
      <StatusBarCompoent />
      <CustomHeader imageSource={imageIndex.backImg} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 12 }} >
        {loading ? <Loading /> : null}
        <View
          style={Styles.mainView}>
          <View  >
            <Text style={[styles.txtHeading,{
                    color:theme.text

            }]}>{localizationStrings?.create_new_password}</Text>
            <Text style={[styles.txtsubHeading, {
              lineHeight: 25
            }]}>
              {/* {localizationStrings?.pasMust}{"\n"} {localizationStrings?.from} */}
              Your new password must be different from {"\n"}previous used passwords.
            </Text>
          </View>
          <View style={{ marginTop: ResponsiveSize.marginTop(35), paddingVertical: hp(1), }}>
            <View
              style={Styles.rowInput}
            >
              <Image source={imageIndex.lock} style={{ height: 20, width: 20 }}
                resizeMode='contain'
              />
              <TextInput
                style={Styles.inputStyle}
                placeholder= {localizationStrings?.new_password}
                placeholderTextColor="#ADA4A5"
                secureTextEntry={secureText}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Image source={secureText ? imageIndex.view : imageIndex.eye} style={Styles.img}
                  resizeMode='cover'
                  tintColor={"#ADA4A5"}
                />
              </TouchableOpacity>
            </View>
            <View
              style={Styles.rowInput}
            >
                <Image source={imageIndex.lock} style={{ height: 20, width: 20 }}
                resizeMode='contain'
              />
              <TextInput
                style={Styles.inputStyle}
                placeholder="Confirm Password"
                placeholderTextColor="#ADA4A5"
                secureTextEntry={secureConfirmText}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setSecureConfirmText(!secureConfirmText)}>
                <Image source={secureConfirmText ? imageIndex.view : imageIndex.eye} style={{ height: 22, width: 22 }}
                  resizeMode='cover'
                  tintColor={"#ADA4A5"}
                />
              </TouchableOpacity>
            </View>
          </View>
          {errorMessage ? <Text style={Styles.redText}>{errorMessage}</Text> : null}
        </View>
      </ScrollView>
      <View style={Styles.btnView}>
        <CustomButton
          title={'SAVE'}
        
          onPress={() => validateAndSubmit()}
        />
      </View>
    </SafeAreaView>
  );
}




