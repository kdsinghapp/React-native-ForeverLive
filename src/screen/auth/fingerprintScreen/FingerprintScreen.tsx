import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,   ScrollView } from 'react-native';
  import imageIndex from '../../../assets/imageIndex';
import CustomHeader from '../../../compoent/CustomHeader';
import font from '../../../theme/font';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import CustomButton from '../../../compoent/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FingerprintScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}> 
    <ScrollView>
      <StatusBarComponent/>
      <CustomHeader  imageSource={imageIndex.backImg}/>

     <Text style={{fontSize:20,
      color:"black",
      textAlign:"center" ,
      fontWeight:"600",
      marginTop:15,
      marginBottom:11
     }}>
     Set Your Fingerprint
      </Text>
      <Text
  style={{
    fontSize: 14,
    color: "black",
    textAlign: "center",
     marginBottom: 11,
    fontFamily: font.PoppinsRegular,
  }}
>
  Add a fingerprint to make your{'\n'}account more secure.
</Text>

     <View style={{alignItems:"center",
      justifyContent:"center" ,
      marginTop:120
     }}>
       <Image
        source={imageIndex.figr} // Place your fingerprint image in the assets folder
        style={styles.fingerprintImage}
        resizeMode="contain"
      />
</View>
       <Text style={styles.instructionText}>
        Please put your finger on the fingerprint scanner to get started.
      </Text>
      </ScrollView>
      {/* Submit Button */}
      <CustomButton
            title= {"Submit"}
            // onPress={() => LoginFunction()
            // }

              onPress={() => {
                navigation.goBack()
              }}
            buttonStyle={{  marginHorizontal:15, marginBottom: 15 }}
          />
    </SafeAreaView>
  );
};

export default FingerprintScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  backButton: {
    alignSelf: 'flex-start',
    marginVertical: 10,
    backgroundColor: '#6A11CB',
    padding: 6,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    color: '#000',
  },
  subText: {
    textAlign: 'center',
    color: '#777',
    marginVertical: 10,
    fontSize: 14,
  },
  fingerprintImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  instructionText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    marginBottom: 30,
    marginTop:11
  },
  submitButton: {
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 'auto',
    marginBottom: 30,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
