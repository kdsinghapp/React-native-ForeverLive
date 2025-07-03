
import React from 'react';
import { View, Text, Image, ScrollView,  SafeAreaView, useWindowDimensions } from 'react-native';
import imageIndex from '../../../../assets/imageIndex';
import CustomHeader from '../../../../compoent/CustomHeader';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
import useAboutFootb from './useAboutFootb';
import HTML from 'react-native-render-html';
import LoadingModal from '../../../../utils/Loader';
import styles from './style';
import localizationStrings from '../../../../Localization/Localization';

const AboutFootb = () => {
    const {
        AboutData,
        isLoading,
    } = useAboutFootb()
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {isLoading ? <LoadingModal /> : null}
            <StatusBarComponent />
            <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings?.about_inside} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={imageIndex.Illustration} style={styles.logo} />
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}> {localizationStrings?.app_about_details}</Text>
                    {AboutData &&
                        <HTML
                            source={{ html: AboutData?.description || '<p>Aucun contenu disponible</p>' }}
                            contentWidth={width}
                            tagsStyles={styles.htmlStyles}
                        />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default AboutFootb;
