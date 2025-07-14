import React, { useState } from 'react';
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
  import LinearGradient from 'react-native-linear-gradient';
import useReject from './useReject';
import imageIndex from '../../assets/imageIndex';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import LoadingModal from '../../utils/Loader';
import ScreenNameEnum from '../../routes/screenName.enum';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import font from '../../theme/font';
 
 

const Reject = () => {
const {     
   loading,
   theme,
   contacts,
   handleAccept ,
   handleReject
   }= useReject()

 
  const renderItem1 = ({ item }:any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.profile }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
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
      </View>
    </View>
  );

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
 

     
 

<FlatList
        data={contacts}
        renderItem={renderItem1}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={() => (
          <View  >
            <Text style={[styles.sectionTitle,{
          color:theme.text ,
          marginTop:2,
          fontFamily:font.PoppinsRegular ,

      }]}>Reject</Text>
          </View>
        )}
        ListEmptyComponent={() => {
          return(
            <EmptyListComponent/>
          )
        }}
      />
</View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Reject;
