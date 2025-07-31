import React from 'react';
import {
  View,
  Text,
   FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  } from 'react-native';
import imageIndex from '../../assets/imageIndex';
 import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
 import styles from './style';
import useText from './useText';
import LoadingModal from '../../utils/Loader';
import Createnote from '../../compoent/Createnote';
import moment from 'moment';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import localizationStrings from '../../Localization/Localization';
 
const TextScreen = () => {
const {  
  loading,
   theme,
  isModalVisible,
  setIsModalVisible,
  SumitFROM,
  NotList ,}= useText()
  const renderNote = ({ item }:any) =>  {
    const originalDateStr = item?.created_at;
const formattedDate = moment(originalDateStr).format("DD/MM/YYYY hh:mmA")

    return(
      <View style={styles.noteCard}>
      <View style={styles.iconContainer}>
        <Image
          source={imageIndex.Group} // use your icon here
          style={styles.icon}
        />
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.noteTitle}>{item?.title}</Text>
        {/* <Text style={styles.noteTitle}>{item.description}</Text> */}
        <Text style={styles.noteTime}>{formattedDate}</Text>
      </View>
      <TouchableOpacity style={styles.arrowBtn}>
       <Image source={imageIndex.BackNavs} style={{

        height:33,
        width:33,
        resizeMode:"contain"
       }}/>
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}> 
    <StatusBarComponent/> 
    {loading ? <LoadingModal /> : null}

    <CustomHeader label='Text' imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

      <Text style={[styles.subHeader,{
                color:theme.text

      }]}>{localizationStrings?.YourTemplate}</Text>

      <TouchableOpacity style={styles.createNoteCard} 
      onPress={()=>setIsModalVisible(true)}
      >
        <Image
          source={imageIndex.note}
          style={styles.createIcon}
        />
        <Text style={[styles.createText,{
                          color:theme.text

        }]}>{localizationStrings?.CreateNote}</Text>
      </TouchableOpacity>

      <Text style={[styles.subHeader,{
                                  color:theme.text

      }]}>Notes</Text>

      <FlatList
        data={NotList}
        style={{
            marginTop:10
        }}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ListEmptyComponent={() => {
          return(
            <EmptyListComponent/>
          )
        }}
      />
      <Createnote
  visible={isModalVisible}
  onClose={() => setIsModalVisible(false)}
  onSubmit={(note:any) => {
    SumitFROM(note)
    // API call or local state update
  }}
/>

    </ScrollView>
    </SafeAreaView>
  );
};


export default TextScreen;
