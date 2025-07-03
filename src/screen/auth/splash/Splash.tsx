import React from 'react';
import { Image,   } from 'react-native';
import styles from './style'
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import useSplash from './useSplash';
import { SafeAreaView } from 'react-native-safe-area-context';
const Splash: React.FC = () => {

const {}= useSplash()

  return (
    <SafeAreaView style={styles.container}
     >
 <StatusBarComponent
    translucent={true}
    barStyle='light-content'
    backgroundColor="#060D24"
   />      <SafeAreaView>
        <Image source={imageIndex.appLogo} style={styles.logo} resizeMode="contain" />
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default Splash;
