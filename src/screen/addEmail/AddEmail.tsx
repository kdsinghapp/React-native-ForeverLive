import React from 'react';
import {
  View,
   StyleSheet,
  Platform,
   ScrollView,
} from 'react-native';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import font from '../../theme/font';
 import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
import CustomButton from '../../compoent/CustomButton';
import TextInputField from '../../utils/TextInputField';
  import { SafeAreaView } from 'react-native-safe-area-context';
import useAddEmail from './useAddEmail';
import LoadingModal from '../../utils/Loader';
import localizationStrings from '../../Localization/Localization';
  
const AddEmail = () => {

const { navigation,
  loading,
  setLoading,
  theme,


  type ,
  
  AddType ,
  email,setemail,
  mob,setMoB
}= useAddEmail()
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
        <StatusBarComponent/>
        {loading ? <LoadingModal /> : null}
       <CustomHeader label={ type=="EMAIL" ?  localizationStrings?.Add : localizationStrings?.byPhone }
        imageSource={imageIndex.backImg}
        />
        <ScrollView 
        showsVerticalScrollIndicator={false}
         >

            <View style={{
                marginHorizontal:15 ,
                marginTop:15
            }}>
 { type=="EMAIL" ? (
   <TextInputField
   text={email}
  onChangeText={setemail}
  placeholder={"email"}
  firstLogo={true}
  img={imageIndex.sms}
/>
 ):(
  <TextInputField
  text={mob}
 onChangeText={setMoB}
 placeholder={"Phone No."}
 firstLogo={true}
 img={imageIndex.mobile}
/>
 )}

 <CustomButton
            title= {localizationStrings?.Add}
            onPress={() => AddType()
            }

               
            buttonStyle={{  marginTop:15 }}
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

export default AddEmail;
