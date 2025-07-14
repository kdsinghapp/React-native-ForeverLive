import React, { useEffect, useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import RegistrationRoutes from './RegistrationRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import Toast from 'react-native-toast-message';
import toastConfig from '../utils/customToast';
import NetInfo from '@react-native-community/netinfo';
import NetworkStatusModal from '../compoent/NetworkStatusModal';
import { LocationProvider } from '../LocationContext';
 import { LanguageProvider } from '../Localization/LanguageContext';
import { ThemeProvider } from '../theme/ThemeProvider';
const AppNavigator: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      setModalVisible(!state.isConnected); // Agar internet off ho to modal show kare, on ho to hide kare
    });

    return () => unsubscribe();
  }, []);
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <LocationProvider>
      <LanguageProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <NavigationContainer>
         <NetworkStatusModal modalVisible={modalVisible} offlineText="No Internet! Please check your connection." />  
            <RegistrationRoutes />
            <Toast config={toastConfig} />
          </NavigationContainer>
          </ThemeProvider>
        </GestureHandlerRootView>
        </LanguageProvider>
        </LocationProvider>
      </PersistGate>
    </Provider>

  );
};

export default AppNavigator;
 