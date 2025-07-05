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
import { useTheme } from '../../theme/ThemeProvider';
import styles from './style';

const notesData = [
  { id: '1', title: 'Work/Professional', time: '19/12/2024 04:53PM' },
  { id: '2', title: 'Personal', time: '19/12/2024 04:53PM' },
  { id: '3', title: 'Creative', time: '19/12/2024 04:53PM' },
  { id: '4', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
  { id: '5', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
];

const TextScreen = () => {
  const { theme }:any = useTheme();

  const renderNote = ({ item }:any) => (
    <View style={styles.noteCard}>
      <View style={styles.iconContainer}>
        <Image
          source={imageIndex.Group} // use your icon here
          style={styles.icon}
        />
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteTime}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.arrowBtn}>
       <Image source={imageIndex.BackNavs} style={{

        height:33,
        width:33,
        resizeMode:"contain"
       }}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:theme.background
    }}> 
    <StatusBarComponent/> 
    <CustomHeader label='Text' imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

      <Text style={[styles.subHeader,{
                color:theme.text

      }]}>Your Template</Text>

      <TouchableOpacity style={styles.createNoteCard}>
        <Image
          source={imageIndex.note}
          style={styles.createIcon}
        />
        <Text style={[styles.createText,{
                          color:theme.text

        }]}>Create Note</Text>
      </TouchableOpacity>

      <Text style={[styles.subHeader,{
                                  color:theme.text

      }]}>Notes</Text>

      <FlatList
        data={notesData}
        style={{
            marginTop:10
        }}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
    </SafeAreaView>
  );
};


export default TextScreen;
