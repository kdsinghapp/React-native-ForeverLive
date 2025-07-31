import {
  View,
  Text,
  Image,
  ScrollView,
   TextInput,
} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Loading from '../../../utils/Loader';
import StatusBarCompoent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import { styles } from '../loginStyle';
import CustomButton from '../../../compoent/CustomButton';
import CustomHeader from '../../../compoent/CustomHeader';
import usePasswordReset from './usePasswordReset';
import ErrorText from '../../../compoent/ErrorText';
import localizationStrings from '../../../Localization/Localization';
import ResponsiveSize from '../../../utils/ResponsiveSize';
import TextInputField from '../../../utils/TextInputField';
import font from '../../../theme/font';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';

export default function PasswordReset() {
  const {
    credentials,
    errors,
    isLoading,
    handleChange,
    handleForgot,
    navigation,
    type, setType
  } = usePasswordReset()
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.background }}>
      <StatusBarCompoent />
      {isLoading ? <Loading /> : null}
      <CustomHeader imageSource={imageIndex.backImg} />
      <ScrollView showsVerticalScrollIndicator={false} >

        <View
          style={{
             padding: 15,
            flex: 1,
          }}>
          <View  >
            <Text style={[styles.txtHeading,{
              color:theme.text
            }]}>
            {localizationStrings?.PasswordReset}
            </Text>
            <Text style={[styles.txtsubHeading, {
               marginTop: 8
            }]}>
{localizationStrings?.resettext}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: ResponsiveSize.marginTop(7), paddingVertical: hp(1), marginHorizontal:15 }}>
                        {/* <TextInputField
                             placeholder={"Phone Number"} 
                            firstLogo={true}
                            img={imageIndex.mobile}
                            //  onChangeText={(value: string) => handleChange('fullName', value)} 
                        /> */}
                               {/* <Text style={{               color:theme.text
, marginTop: 8, marginBottom: 5, fontSize: 16,   textAlign: "center", fontFamily:font.PoppinsBold }}>Or</Text> */}
                               <TextInputField
                               text={credentials.email}
                             placeholder={localizationStrings?.EmailAddress} 
                            firstLogo={true}
                            img={imageIndex.mobile}
                              onChangeText={(value: string) => handleChange('email', value)} 
                        />

        {errors.email && <ErrorText message={errors.email} Styles={{
          marginLeft: 16,
          marginTop: 15
        }} />}
           </View>
      </ScrollView>
      <View style={{
        justifyContent: 'flex-start', marginBottom: 18,
        marginHorizontal: 15
      }}>
        <CustomButton
          title={localizationStrings?.submit}
// onPress={()=>navigation.navigate(ScreenNameEnum.OtpScreen)}

           onPress={() => handleForgot()}

         />
      </View>
    </SafeAreaView>
  );
}



