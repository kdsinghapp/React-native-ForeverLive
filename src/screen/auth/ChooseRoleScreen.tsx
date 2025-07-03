import React, { useState } from 'react';
import { View, Text,   TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import imageIndex from '../../assets/imageIndex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import localizationStrings from '../../Localization/Localization';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChooseRoleScreen = ({ navigation }: any) => {
    const [selectedRole, setSelectedRole] = useState(''); 
    const navgation  =useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarComponent />
            <View style={styles.logoContainer}>
                <View style={styles.logo}>
                    <Image source={imageIndex.appLogLogin} style={styles.logo} resizeMode="contain" />
                </View>
            </View>
            <Text style={styles.heading}>{localizationStrings?.choose_your_role}</Text>
            <Text style={styles.subHeading}>{localizationStrings?.Select}</Text>
            <Image source={imageIndex.selectionbag} style={{
                height: 200,
                width: 300,
                marginTop: 44
            }} resizeMode="cover" />
            <View style={styles.buttonContainer}>
            <Pressable
                        onPress={async () => {
                            try {
                                setSelectedRole('User');
                                await AsyncStorage.setItem('userRole', 'User'); // Save to AsyncStorage
                                navgation.navigate(ScreenNameEnum.LoginScreen)
                            } catch (error) {
                                console.error('Failed to save user role:', error);
                            }
                        }}
                        style={styles.langButton}
                    >
                        <View style={styles.langRow}>
                            <Image source={imageIndex.user} style={{
                                height:30,
                                width:30 ,
                                resizeMode:"contain"
                            }} />
                            <Text style={styles.langText}>{localizationStrings?.user}</Text>
                        </View>
                    </Pressable>
            <Pressable
                         onPress={async () => {
                            try {
                                setSelectedRole('Seller');
                                await AsyncStorage.setItem('userRole', 'Seller'); // Save to AsyncStorage 
                                navgation.navigate(ScreenNameEnum.LoginScreen)
                            } catch (error) {
                                console.error('Failed to save user role:', error);
                            }
                        }}
                        style={styles.langButton}
                    >
                        <View style={styles.langRow}>
                            <Image source={imageIndex.seller} style={{
                                height:30,
                                width:30 ,
                                resizeMode:"contain"
                            }} />
                            <Text style={styles.langText}>{localizationStrings?.seller}</Text>
                        </View>
                    </Pressable>
                {/* <TouchableOpacity
                    style={[
                        styles.bottomButton,
                        {
                            borderColor: selectedRole === 'User' ? 'black' : '#9DB2BF',
                            backgroundColor: selectedRole === 'User' ? 'black' : 'transparent',
                        },
                    ]}
                    onPress={async () => {
                        try {
                            setSelectedRole('User');
                            await AsyncStorage.setItem('userRole', 'User'); // Save to AsyncStorage
                            navgation.navigate(ScreenNameEnum.LoginScreen)
                        } catch (error) {
                            console.error('Failed to save user role:', error);
                        }
                    }}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            {
                                color: selectedRole === 'User' ? 'white' : 'black',
                            },
                        ]}
                    >
                        {localizationStrings?.user}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.bottomButton,
                        {
                            borderColor: selectedRole === 'Seller' ? 'black' : '#9DB2BF',
                            backgroundColor: selectedRole === 'Seller' ? '' : 'transparent',
                        },
                    ]}
                    onPress={async () => {
                        try {
                            setSelectedRole('Seller');
                            await AsyncStorage.setItem('userRole', 'Seller'); // Save to AsyncStorage 
                            navgation.navigate(ScreenNameEnum.LoginScreen)
                        } catch (error) {
                            console.error('Failed to save user role:', error);
                        }
                    }}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            {
                                color: selectedRole === 'Seller' ? 'white' : 'black',
                            },
                        ]}
                    >
                                                {localizationStrings?.seller}

                    </Text>
                </TouchableOpacity> */}
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 100
    },
    logo: {
        height: 150,
        width: 150,
    },
    heading: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 55,
        lineHeight: 28,
        color: "black"
    },
    subHeading: {
        fontSize: 14,
        color: 'black',
        lineHeight: 21,
        fontWeight: "400"
    },
    radioContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    radioButtonSelected: {
        backgroundColor: '#e6f7ff',
        borderColor: 'green',
    },
    langButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginBottom: 18,
        borderWidth: 0.8,
        borderColor: '#2a2a2a', 
       
    
    },
    langRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    langText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft: 12,
    },
    flagIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    radioInner: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'green',
        marginRight: 8,
    },
    radioText: {
        fontSize: 16,
    },
    illustration: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    buttonContainer: {
         justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 20,
    },
    bottomButton: {
        flex: 1,
        paddingVertical: 30,
        borderWidth: 1.5,
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        lineHeight: 24,
        marginTop: 4
    },
});

export default ChooseRoleScreen;
