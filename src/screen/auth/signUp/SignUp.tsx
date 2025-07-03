import {
    View,
    Text,
    Image,
    TouchableOpacity,
     ScrollView,
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
import useSignup from './useSinup';
import localizationStrings from '../../../Localization/Localization';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
    const {
        credentials,
        errors,
        isLoading,
        handleChange,
        handleSignup,
        navigation,
    } = useSignup()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBarCompoent />
            <ScrollView showsVerticalScrollIndicator={false} >
                {isLoading ? <Loading /> : null}
                <View
                    style={{
                        backgroundColor: '#FFF',
                        padding: 15,
                        flex: 1,
                        marginTop: hp(4)
                    }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image
                            source={imageIndex.appLogLogin}
                            style={{ height: 74, width: 175 }} resizeMode='contain'
                        />
                    </View>
                    <View style={{ marginTop: 22 }}>
                        <Text style={styles.txtHeading}>Create Account</Text>
                        <Text style={[styles.txtsubHeading, {
                            marginTop:5
                         }]}>
                            {localizationStrings?.signup_form_prompt} 
                        </Text>

                    </View>
                    <View style={{ marginTop: ResponsiveSize.marginTop(7), paddingVertical: hp(1), }}>
                        <TextInputField
                            lable= {localizationStrings?.full_name} 
                            placeholder={localizationStrings?.full_name} 
                            firstLogo={true}
                            img={imageIndex.prfoile}
                            text={credentials.fullName}
                            onChangeText={(value: string) => handleChange('fullName', value)} 
                        />
                        {errors.fullName ? <Text style={{ color: 'red', fontSize: 12, marginTop: 2 }}>{errors.fullName}</Text> : null}
                        <TextInputField
                            lable= {"Phone No."}
                            text={credentials.password}
                            onChangeText={(value: string) => handleChange('password', value)} 
                            placeholder={'Phone No.'}
                            firstLogo={true}
                            showEye={false}
                            img={imageIndex.mobile}
                        />
                           <TouchableOpacity
                        // onPress={() => setDropOpen(true)}
                        style={{
                            flexDirection: 'row',
                             backgroundColor: '#F7F8F8',
                            borderRadius: 15,
                            height: 60,
                             paddingHorizontal: 5,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                             marginTop: 5
                        }}>
                        <View style={{ flexDirection: "row", alignItems: "center", padding: 9 }}>

                            <Image source={imageIndex.city}


                                 style={{ height: 24, width: 24 }} resizeMode='contain' />
                          
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{
                                    color: '#ADA4A5',
                                    fontSize: 14,
                                    marginLeft: 10
                                }}>City
                                </Text>
                            </View>


                        </View>
                        <Image source={imageIndex.arrowDown} 
                             style={{ height: 11, width: 18, right: 10 }} resizeMode='contain' />
                    </TouchableOpacity>
                        <TextInputField
                            lable={localizationStrings?.email} 

                            placeholder= {"Email Address"} 

                            text={credentials.email}
                            onChangeText={(value: string) => handleChange('email', value)} 

                            firstLogo={true}
                            img={imageIndex.sms}
                        />
                        {errors.email ? <Text style={{ color: 'red', fontSize: 12, marginTop: 2 }}>{errors.email}</Text> : null}
                      
                          <TextInputField
                            lable= {localizationStrings?.confirm_password}
                            text={credentials.conPassword}
                            onChangeText={(value: string) => handleChange('conPassword', value)} 
                            placeholder={'Password'}
                            firstLogo={true}
                            showEye={true}
                            img={imageIndex.lock}
                        />  
                        {errors.conPassword ? <Text style={{ color: 'red', fontSize: 12, marginTop: 2 }}>{errors.conPassword}</Text> : null}
                        <TextInputField
                            type={"decimal-pad"}
                            lable={localizationStrings?.mobile}
                            text={credentials.mobile}
                            onChangeText={(value: string) => handleChange('mobile', value)} 
                            placeholder={'Password'}
                            firstLogo={true}
                            showEye={true}
                            img={imageIndex.lock}
                        />
                        {errors.mobile ? <Text style={{ color: 'red', fontSize: 12, marginTop: 2 }}>{errors.mobile}</Text> : null}
                    </View>
                    <CustomButton
                        title={localizationStrings?.sign_up}
                        // onPress={() => handleSignup()}
                        onPress={() => {
                            navigation.navigate(ScreenNameEnum.LoginScreen)
                        }}
                        buttonStyle={{ width: "100%", marginTop: 3 }}
                    />
                  
                </View>
                <View
                    style={Styles.titleView}>
                    <Text style={Styles.sumTitle}>
                       {localizationStrings?.already_have_account} {""}
                    </Text>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            navigation.navigate(ScreenNameEnum.LoginScreen)
                        }}>
                        <Text style={Styles.text}>{localizationStrings?.login}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}




