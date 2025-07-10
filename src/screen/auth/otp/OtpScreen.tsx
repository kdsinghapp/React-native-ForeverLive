import { View, Text, ScrollView,   } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CodeField, Cursor, } from
  'react-native-confirmation-code-field';
import Loading from '../../../utils/Loader';
import imageIndex from '../../../assets/imageIndex';
import CustomButton from '../../../compoent/CustomButton';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../compoent/CustomHeader';
 import styles from './style';
import userOtp from './userOtp';
import localizationStrings from '../../../Localization/Localization';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';

export default function OtpScreen() {
  const {
     isLoading,
    ref,
    errorMessage,  
    props, getCellOnLayoutHandler,
    value,  
    handleChangeText,
    handleVerifyOTP,
    email,
    navigation
  } = userOtp()
  const { theme }:any = useTheme();

  return (
    <View style={{
      backgroundColor: theme.background,
      flex: 1,
    }}>
      {isLoading ? <Loading /> : null}
      <SafeAreaView style={{
        flex: 1,
      }}>
        <StatusBarComponent />
           <CustomHeader imageSource={imageIndex.backImg} />
         <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 15 }}>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={[styles.txtHeading,{
              color:theme.text
            }]}>Check your mail </Text>
            {email &&             <Text style={styles.txtHeading}>{email}</Text>
          }
            <Text style={styles.txtsubHeading}>
            Please put the 4 digits sent to you            </Text>
          </View>
          <View
            style={{ height: hp(10), marginHorizontal: 55, marginTop: 38, justifyContent: "flex-start" }} >
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={handleChangeText}
              cellCount={4}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }:any) => (
                <View style={{ marginStart: -1, backgroundColor: '#E9E9E9', borderRadius: 15, }}>
                  <Text
                    key={index}
                    style={[styles?.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            {errorMessage ? (
              <Text style={{ color: 'red', marginTop: 18 }}>{errorMessage}</Text>
            ) : null}
          </View>
        </ScrollView>
        <View style={styles.btn}>
          <CustomButton
            title={localizationStrings?.submit}
            onPress={() =>
              handleVerifyOTP()
             }
            // onPress={()=>
            //   navigation.navigate(ScreenNameEnum.CreatePassword)
            // }
          />
        </View>
      </SafeAreaView>
    </View>
  );
}





