import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
 import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
 import StatusBarComponent from '../../compoent/StatusBarCompoent';
 
const QRCodeScreen = () => {
   const isLogin = useSelector((state: any) => state?.auth);
  const userId = isLogin?.userData?.user_data?.id;
  const qrValue = `https://yourapp.com/user?id=${userId}`;
  return (
    <SafeAreaView style={styles.safeArea}>
                             <StatusBarComponent />

                     <CustomHeader imageSource={imageIndex.backImg} label={"QR Code"}/>

      <View style={styles.container}>
        <Text style={styles.title}>Scan this QR Code</Text>
        <QRCode
          value={qrValue}
          size={200}
          backgroundColor="white"
          color="black"
        />
        <Text style={styles.userIdText}>{isLogin?.userData?.user_data?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: '600',
    color: '#000',
  },
  userIdText: {
    marginTop: 25,
    fontSize: 16,
    color: '#555',
  },
});

export default QRCodeScreen;
