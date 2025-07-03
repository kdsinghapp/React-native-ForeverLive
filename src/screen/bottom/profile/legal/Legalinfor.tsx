import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import imageIndex from '../../../../assets/imageIndex';
import CustomHeader from '../../../../compoent/CustomHeader';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
import styles from './style';
import useLegalinfor from './useLegalinfor';
import HTML from 'react-native-render-html';
import LoadingModal from '../../../../utils/Loader';
import localizationStrings from '../../../../Localization/Localization';

const Legalinfor = () => {
    const {
        privacyData,
        isLoading,
    } = useLegalinfor()
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {isLoading ? <LoadingModal /> : null}

            <StatusBarComponent />
            <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings?.legal_information} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Logo Section */}
                <View style={styles.logoContainer}>
                    <Image source={imageIndex.about} style={styles.logo} />
                </View>

                 <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{localizationStrings?.terms_and_condition}</Text>
                    {privacyData &&
                        <HTML
                            source={{ html: privacyData?.description || '<p>No content available</p>' }}
                            contentWidth={width}
                            tagsStyles={styles.htmlStyles}
                        />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default Legalinfor;