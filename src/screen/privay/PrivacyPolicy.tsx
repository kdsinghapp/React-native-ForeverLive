
import React, { useEffect, useState } from 'react'
import {
    Image, ScrollView, View,
    StyleSheet,
    useWindowDimensions,
    Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';
import Loading from '../../utils/Loader';
import imageIndex from '../../assets/imageIndex'
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import { useNavigation } from '@react-navigation/native';
 import { height } from '../../utils/Constant';
import { useTheme } from '../../theme/ThemeProvider';
import { PrivacyPolicyApi } from '../../redux/Api/AuthApi';
const PrivacyPolicy = () => {
    const [isLoading, setLoading] = useState(false)
     const [faqData, setFaqData] = useState<any>([])
    useEffect(() => {
        get_states_list()
    }, []);

    const { theme }:any = useTheme();

    const get_states_list = async () => {
        try {
            const state = await PrivacyPolicyApi(setLoading);
            if (state) {
                console.log("state",state)
                setFaqData(state?.data);  // `result` ke andar `description` hai
            }
        } catch (error) {
            setFaqData([]);
        }
    };

    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor:theme.background
        }]}>
            {isLoading ? <Loading /> : null}
            <StatusBarComponent />
            <CustomHeader
               
                imageSource={imageIndex.backImg} label="Privacy Policy" />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
                <View style={styles.illustrationWrapper}>
                    <Image
                        source={imageIndex.Privacy}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>
                {/* {faqData.length != 0 && ( */}
                    <Text style={{ color:theme.text, fontWeight: "800", fontSize: 18 }}>Terms and Conditions</Text>
                {/* )} */}
                                    <Text style={{ color: "black", fontWeight: "700", fontSize: 18 }}>Privacy Policy</Text>
                                 


                                    {faqData?.length > 0 && (
  <HTML
    source={{ html: faqData[0]?.privacy_policy_text || '<p>No content available</p>' }}
    contentWidth={width}
    tagsStyles={styles.htmlStyles}
  />
)}

            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    htmlStyles: {
        p: {
            fontSize: 14,
            color: '#9796A1',
            lineHeight: 24,
            textAlign: 'justify',
            fontWeight: "400",
            marginTop: 8,


        },
        h1: {
            fontSize: 22,
            fontWeight: '500',
            color: '#000',
            marginBottom: 10,
        },
        h2: {
            fontSize: 18,
            fontWeight: '500',
            color: '#222',
            marginBottom: 8,
        },
        a: {
            color: '#007bff',
            // textDecorationLine: 'underline',
        },
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
     },
    headerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
         // Add shadow on iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Add elevation on Android
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        alignItems: "center",
        marginHorizontal: 20
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    contentContainer: {
        padding: 12,
    },
    illustrationWrapper: {
        alignItems: 'center',
        marginBottom: 16,
    },
    illustration: {
        width: '80%',
        height: height *0.3,
        marginTop: 15
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginBottom: 10,
        lineHeight: 30
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#666',
        textAlign: 'justify',
    },

});

export default PrivacyPolicy