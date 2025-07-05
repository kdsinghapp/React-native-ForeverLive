import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
   TextInput,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import font from '../../../theme/font';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../../assets/imageIndex';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useTheme } from '../../../theme/ThemeProvider';

const contacts = [
  { id: '1', initials: 'BS', name: 'Brandon Siphron', email: 'brandonsiphron@gmail.com' },
  { id: '2', initials: 'MC', name: 'Makenna Curtis', email: 'makennacurtis@gmail.com' },
  { id: '3', initials: 'AG', name: 'Ann Gouse', email: 'anngouse@gmail.com' },
  { id: '4', initials: 'JB', name: 'Jaxson Baptista', email: 'brandonsiphron@gmail.com' },
];

const Network = () => {
    const nav = useNavigation()
  const renderItem = ({ item }:any) => (
    <View style={styles.contactCard}>
<LinearGradient 
    start={{ x: 0, y: 1 }}
    end={{ x: 2, y: 0 }}
    colors={['#8F52CA', '#3658AE', '#19A3BD']}
  style={styles.avatar}
>
        <Text style={styles.avatarText}>{item.initials}</Text>
        </LinearGradient>  
            <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
        <StatusBarComponent/>
        <ScrollView 
        
        showsVerticalScrollIndicator={false}
         >

            <View style={{
                marginHorizontal:15
            }}>
      <Text style={[styles.sectionTitle,{
              color:theme.text

      }]}>Network</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} 
        onPress={()=>nav.navigate(ScreenNameEnum.AddEmail,{
            type:"Email"
        })}
        >
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Image source={imageIndex?.sms} 
                style={{
                    height:33,
                    width:33 ,
                    resizeMode:"contain"
                }}
                
                />
          <Text style={[styles.buttonText,{
              color:theme.text
          }]}>Add by Email</Text>

            </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.actionButton}
         
         onPress={()=>nav.navigate(ScreenNameEnum.AddEmail,{
            type:"Phone"
        })}
         >
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Image source={imageIndex?.mobile} 
                style={{
                    height:33,
                    width:33 ,
                    resizeMode:"contain"
                }}
                
                />
          <Text style={[styles.buttonText,{
              color:theme.text
          }]}>Add by Phone</Text>

            </View>
         </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.qrButton}
         onPress={()=>nav.navigate(ScreenNameEnum.ScanCode)}
      >
      <Image source={imageIndex?.scanning} 
                style={{
                    height:33,
                    width:33 ,
                    resizeMode:"contain"
                }}
                
                />
        <Text style={[styles.buttonText,{
            color:theme.text
        }]}>Scan QR Code</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle,{
          color:theme.text
      }]}>Network</Text>

      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

</View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Network;
