import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
import CustomButton from '../../compoent/CustomButton';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
 import Loading from '../../utils/Loader';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { height } from '../../utils/Constant';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '../../theme/ThemeProvider';


const HelpSupportScreen = () => {
  const navigation = useNavigation()
  const [SupportHelp, setSupportHelp] = useState('')
  const [isLoading, setLoading] = useState(false)
  const isLogin = useSelector((state: any) => state?.auth);

  const handleSubmit = async () => {
    if (!SupportHelp) {
      navigation.goBack();
    }
    else {
      try {
        // const response = await Support_Api(SupportHelp, setLoading, isLogin?.userData?.id, navigation);
      } catch (error) {
      }
    }

  }

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent />
      {isLoading && <Loading />}
      <CustomHeader
                      label="Help & Support"
                      imageSource={imageIndex.backImg}
                  />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
           
              {isLoading ? <Loading /> : null}

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
              >
                <View>
                  

                  <View style={{ marginHorizontal: 15 }}>
                    <View style={styles.illustrationContainer}>
                      <Image
                        source={imageIndex.helpPrva}
                        style={styles.illustration}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: '#3658AE',
                        borderRadius: 15,
                        height: height * 0.2,
                        marginTop:20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#3658AE',
                          marginBottom: 8,
                          marginLeft: 10,
                          marginTop: 5,
                          fontWeight: '800',
                        }}
                      >
                        How can we help?
                      </Text>
                      <TextInput
                        value={SupportHelp}
                        onChangeText={setSupportHelp}
                        style={{
                          fontSize: 12,
                          color: 'black',
                          marginLeft: 10,
                          fontWeight: '500',
                          bottom: 10,
                          textAlignVertical: 'top',
                          flex: 1
                        }}
                        placeholder="Type Here..."
                        placeholderTextColor="#3658AE"
                        multiline
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>

              {!keyboardVisible && (
                <View style={styles.buttonContainer}>
                  <CustomButton title="Submit" onPress={handleSubmit}  
                  buttonStyle={{
                    backgroundColor:"#F39C12"
                  }}
                  />
                </View>
              )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
};

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff'
  },
  illustrationContainer: {
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '100%',
    height: height * 0.20,
  },
  input: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 55,
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 8,
    textAlignVertical: 'top', // Ensures multiline text starts at top
    fontSize: 16
  },
  submitButton: {
    marginTop: 20,
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#FF6B00',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
  position: 'absolute',
  bottom: 0,
  left: 15,
  right: 15,
  marginBottom:16
},

});
