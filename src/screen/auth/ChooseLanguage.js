import React, { useEffect } from 'react';
import {
    Image,
    View,
    Pressable,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localizationStrings from '../../Localization/Localization';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import imageIndex from '../../assets/imageIndex';
import ScreenNameEnum from '../../routes/screenName.enum';

const ChooseLanguage = () => {
    const navigation = useNavigation();

    const handleChangeLanguage = async (language) => {
        localizationStrings.setLanguage(language);
        await AsyncStorage.setItem("Lng", language);
        navigation.navigate(ScreenNameEnum.ChooseRoleScreen);
    };

    useEffect(() => {
        const fetchLanguage = async () => {
            const lang = await AsyncStorage.getItem("Lng");
            if (lang) localizationStrings.setLanguage(lang);
        };
        fetchLanguage();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBarComponent   />
            <View style={styles.container}>
                <Image source={imageIndex.appLogLogin} style={styles.logo} />

                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.subText}>
                    {localizationStrings?.Choose_lng || "Choose your language"}
                </Text>

                <View style={styles.buttonWrapper}>
                    <Pressable
                        onPress={() => handleChangeLanguage('English')}
                        style={styles.langButton}
                    >
                        <View style={styles.langRow}>
                            <Image source={imageIndex.e} style={styles.flagIcon} />
                            <Text style={styles.langText}>English</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handleChangeLanguage('French')}
                        style={styles.langButton}
                    >
                        <View style={styles.langRow}>
                            <Image source={imageIndex.f} style={styles.flagIcon} />
                            <Text style={styles.langText}>French</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white', // dark background
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logo: {
        height: 55,
        width: 220,
        resizeMode:"contain" ,
        marginBottom:80
     },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    subText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 40,
        textAlign: 'center',
        lineHeight: 22,
    },
    buttonWrapper: {
        width: '100%',
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
});

export default ChooseLanguage;
