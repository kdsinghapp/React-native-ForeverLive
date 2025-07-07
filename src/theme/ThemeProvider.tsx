 
  import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
  } from 'react';
  import { Appearance } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const ThemeContext = createContext(null);
  
  export const useTheme = () => useContext(ThemeContext);
  
  const lightTheme = {
    mode: 'light',
    background: '#FFFFFF',
    text: '#000000',
    primary: '#3658AE',
    tab: 'white',
    statusBar: '#FFFFFF',
  };
  
  const darkTheme = {
    mode: 'dark',
    background: '#000822',
    // background: '#000000',
    text: '#FFFFFF',
    primary: '#3658AE',
    tab: '#000822',
    statusBar: '#000000',
  };
  
  export const ThemeProvider = ({ children }:any) => {
    const [theme, setTheme] = useState(lightTheme);
    const userSelected = useRef(false);
  
    useEffect(() => {
      const loadTheme = async () => {
        const savedTheme = await AsyncStorage.getItem('app_theme');
        if (savedTheme === 'dark') {
          setTheme(darkTheme);
          userSelected.current = true;
        } else if (savedTheme === 'light') {
          setTheme(lightTheme);
          userSelected.current = true;
        } else {
          const systemTheme = Appearance.getColorScheme();
          setTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
        }
      };
  
      loadTheme();
  
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        if (!userSelected.current) {
          setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
        }
      });
  
      return () => subscription.remove();
    }, []);
  
    const toggleTheme = async () => {
      const newTheme = theme.mode === 'light' ? darkTheme : lightTheme;
      setTheme(newTheme);
      userSelected.current = true;
      await AsyncStorage.setItem('app_theme', newTheme.mode);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  