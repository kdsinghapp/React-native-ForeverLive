import React, { useState } from 'react';
import {
  View,
  Text,
   FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
 import imageIndex from '../../../assets/imageIndex';
import ScreenNameEnum from '../../../routes/screenName.enum';
  import styles from './style';
 import useNetwork from './useNetwork';
import { SafeAreaView } from 'react-native-safe-area-context';
 import LoadingModal from '../../../utils/Loader';
import moment from 'moment';
import localizationStrings from '../../../Localization/Localization';
 
 

const Network = () => {
const {     
      navigation,
  loading,
   theme,
   contacts,
   handleAccept ,
   handleReject ,
   getRequest
   }= useNetwork()

   const renderItem = ({ item }:any) =>  {
    console.log("item",item)
     return(
<View style={styles.contactCard}>
  {item?.user?.image ?   (
     <Image  
     style={{ height: 55, width: 55, borderRadius: 10, marginRight: 10 }}
     source={{ uri: item?.user?.image }}
   />
  ):
  
  <Image  
  style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
  source={imageIndex.prfoile}
/>
  }
   <View style={{ flex: 1 }}>
     <TouchableOpacity 
     
     onPress={()=> navigation.navigate(ScreenNameEnum.Reject,{
        item : item
     })}
     style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={styles.name}>{item?.user?.full_name}</Text>
      <Text style={styles.name}>
      <Text
  style={{
    color: item?.status?.toLowerCase() === 'accept' ? '#97f2a8' : 'black',
    fontWeight: 'bold',
  }}
>

  {item?.status?.toLowerCase() === 'accept' ? <Text>Acces user</Text> : <Text>{item?.status}</Text>
  
}
</Text>
</Text>
    </TouchableOpacity>
    <Text style={styles.email}>{item?.user?.email}</Text>
  </View>
</View>

    )
   }
  const renderItem1 = ({ item }:any) => {
    console.log("item",item)
     const createdAt = item?.user.created_at;
    const formattedDate = moment(createdAt, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY, h:mm A");
    return(
      <View style={styles.card}>
      <Image source={{ uri: item.user.image }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <View>
        <Text style={styles.name}>{item?.user?.full_name}</Text>
        <Text style={styles.name}>{formattedDate}</Text>
        <Text style={styles.name}>{item?.status}</Text>
        </View>
        {item?.status == "Accept" ?  null : (
           <View style={styles.buttonRow1}>
           <TouchableOpacity
             style={[styles.button, styles.acceptButton]}
             onPress={() => handleAccept(item.id)}
           >
             <Text style={styles.buttonText1}>Accept</Text>
           </TouchableOpacity>
           <TouchableOpacity
             style={[styles.button, styles.rejectButton]}
             onPress={() => handleReject(item.id)}
           >
             <Text style={styles.buttonText1}>Reject</Text>
           </TouchableOpacity>
         </View>
        )}
          
      </View>
    </View>
    )
  }
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
        <StatusBarComponent/>
        {loading ? <LoadingModal /> : null}
        <ScrollView 
        showsVerticalScrollIndicator={false}
         >
            <View style={{
                marginHorizontal:15
            }}>
      <Text style={[styles.sectionTitle,{
              color:theme.text
      }]}>{localizationStrings.Network}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} 
        onPress={()=>navigation.navigate(ScreenNameEnum.AddEmail,{
            type:"EMAIL"
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
         onPress={()=>navigation.navigate(ScreenNameEnum.AddEmail,{
            type:"NUMBER"
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
         onPress={()=>navigation.navigate(ScreenNameEnum.ScanCode)}
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
        data={getRequest}
        renderItem={renderItem1}
        keyExtractor={(item:any) => item.id}
        contentContainerStyle={styles.list}
      
      />
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        // ListEmptyComponent={() => {
        //   return(
        //     <EmptyListComponent/>
        //   )
        // }}
      />

</View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Network;
