import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localizationStrings from './Localization';

export const LanguageContext = createContext({
  language: 'English',
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('Lng');
      if (storedLanguage) {
        setLanguage(storedLanguage);
        localizationStrings.setLanguage(storedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (newLanguage) => {
    setLanguage(newLanguage);
    localizationStrings.setLanguage(newLanguage);
    await AsyncStorage.setItem('Lng', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
