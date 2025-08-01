import React from 'react';
import {
  View,
  Text,
  StyleSheet,
 
   TextInput,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import font from '../../theme/font';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeProvider';
 const ScanCode = () => {
 const navigation = useNavigation()
 const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
        <StatusBarComponent/>

        <CustomHeader label={"Scan QR Code" }

        imageSource={imageIndex.backImg}
        />
        <ScrollView 
        
        showsVerticalScrollIndicator={false}
         >

            <View style={{
                marginHorizontal:15,
                justifyContent:"center",
                alignItems:"center" ,
                marginTop:140
            }}>
 <Image source={imageIndex.scan} 
 
 style={{
    height:220,
    width:220,
    resizeMode:"contain"
 }}
 />

 
       
</View>
      </ScrollView>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
     marginVertical: 12,
    fontFamily:font.PoppinsBold ,
    color:"black"
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
   },
  actionButton: {
     flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#3658AE',
    borderWidth: 1.5,
    borderRadius: 20,
     marginRight: 8,
    width:"50%" ,
    height:107,
    justifyContent:"center"
  },
  qrButton: {
    borderColor: '#7b61ff',
    borderWidth: 1.5,
    borderRadius: 20,
     alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    flexDirection:"row",
    height:107 ,
    marginTop:11
  },
  icon: {
    fontSize: 12,
    marginRight: 6,
    fontFamily:font.PoppinsRegular,
    color:"black"
  },
  buttonText: {
    fontSize: 14,
     color: '#000',
    fontFamily:font.PoppinsRegular ,
    textAlign:"center" ,
    marginLeft:10
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    marginHorizontal:1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2, // adjust as needed
      },
    }),
  
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3658AE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
     fontSize: 15,
    color:"black",
    fontFamily:font.PoppinsSemiBold
  },
  email: {
    color: '#9DB2BF',
    fontSize: 12,
    marginTop: 2,
    fontFamily:font.PoppinsRegular
  },
});

export default ScanCode;
// import React from 'react';
// import { View, Text, StyleSheet, Linking } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

// const QRCodeScanScreen = () => {
//   const onSuccess = (e) => {
//     console.log('QR Code scanned value:', e.data);
//     // Example action: Open URL
//     Linking.openURL(e.data).catch(err => console.error('An error occurred', err));
//   };

//   return (
//     <QRCodeScanner
//       onRead={onSuccess}
//       flashMode={RNCamera.Constants.FlashMode.off}
//       topContent={<Text style={styles.centerText}>Scan your QR Code</Text>}
//       bottomContent={<Text style={styles.bottomText}>Align QR code within frame</Text>}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   centerText: { fontSize: 18, padding: 16, textAlign: 'center' },
//   bottomText: { fontSize: 14, textAlign: 'center', color: 'gray' },
// });

// export default QRCodeScanScreen;
