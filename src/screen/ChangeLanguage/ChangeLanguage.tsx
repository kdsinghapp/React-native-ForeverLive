import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
import styles from './style';
import { LanguageContext } from '../../Localization/LanguageContext';
import localizationStrings from '../../Localization/Localization';
import { useTheme } from '../../theme/ThemeProvider';
 
const ChangeLanguage = ({ navigation }: any) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [selectedLang, setSelectedLang] = useState(language);

  useEffect(() => {
    setSelectedLang(language);
  }, [language]);

  const handleLanguageSelect = async (lang: string) => {
    await changeLanguage(lang);
    setSelectedLang(lang);
  };
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <CustomHeader label={'Language'} imageSource={imageIndex.backImg} />

      <TouchableOpacity
  style={styles.menuItem}
  onPress={() => handleLanguageSelect('English')}
>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image source={imageIndex.english} style={styles.icon} />
    <Text style={[styles.menuText,{
            color:theme.text

    }]}>English</Text>
  </View>
  <Image
    resizeMode="contain"
    source={selectedLang == 'English' ? imageIndex.raido : imageIndex.radio}
    style={{ height: 24, width: 24 }}
  />
</TouchableOpacity>

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => handleLanguageSelect('French')}
>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image source={imageIndex.frenchs} style={styles.icon} />
    <Text style={[styles.menuText,{
                  color:theme.text

    }]}>French</Text>
  </View>
  <Image
    resizeMode="contain"
    source={selectedLang == 'French' ? imageIndex.raido : imageIndex.radio}
    style={{ height: 24, width: 24 }}
  />
</TouchableOpacity>

    </SafeAreaView>
  );
};

export default ChangeLanguage;
