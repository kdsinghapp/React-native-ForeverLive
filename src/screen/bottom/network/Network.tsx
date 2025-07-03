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

const contacts = [
  { id: '1', initials: 'BS', name: 'Brandon Siphron', email: 'brandonsiphron@gmail.com' },
  { id: '2', initials: 'MC', name: 'Makenna Curtis', email: 'makennacurtis@gmail.com' },
  { id: '3', initials: 'AG', name: 'Ann Gouse', email: 'anngouse@gmail.com' },
  { id: '4', initials: 'JB', name: 'Jaxson Baptista', email: 'brandonsiphron@gmail.com' },
];

const Network = () => {
    const nav = useNavigation()
  const renderItem = ({ item }) => (
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

  return (
    <SafeAreaView style={styles.container}>
        <StatusBarComponent/>
        <ScrollView 
        
        showsVerticalScrollIndicator={false}
         >

            <View style={{
                marginHorizontal:15
            }}>
      <Text style={styles.sectionTitle}>Network</Text>

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
          <Text style={styles.buttonText}>Add by Email</Text>

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
          <Text style={styles.buttonText}>Add by Phone</Text>

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
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Network</Text>

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

export default Network;
