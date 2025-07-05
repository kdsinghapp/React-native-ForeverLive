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
import CustomButton from '../../compoent/CustomButton';
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

const Voice = () => {
  const { theme }:any = useTheme();

  const renderNote = ({ item }:any) => (
    <View style={styles.noteCard}>
      <View style={styles.iconContainer}>
        <Image
          source={imageIndex.voies} // use your icon here
          style={styles.icon}
        />
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteTime}>{item.time}</Text>
        <Text style={styles.noteTime}>Peter, Anna</Text>
      </View>
      <TouchableOpacity style={styles.arrowBtn}>
       <Image source={imageIndex.videoplay} style={{

        height:22,
        width:22,
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
    <CustomHeader label='Add a Photo Memory' imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
 
 
 
  <View style={{
    flex:1,
    justifyContent:"space-between" ,
    flexDirection:"row",
    alignItems:"center"
  }}>
  <Text style={[styles.subHeader,{
            color:theme.text

  }]}>Notes</Text>
  <Text style={[styles.subHeader,{
    color:"red",
   }]}>4 records</Text>

  </View>

      <FlatList
        data={notesData}
        style={{
            marginTop:30
        }}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
    <CustomButton
            title= {"Start Recording"}
            
            // onPress={() => LoginFunction()
            // }

            //   onPress={() => {
            //     navigation.navigate(ScreenNameEnum.TabNavigator)
            //   }}
            buttonStyle={{ marginHorizontal:15 ,marginBottom:20}}
          />
    </SafeAreaView>
  );
};



export default Voice;
