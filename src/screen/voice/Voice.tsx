import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
 } from 'react-native';
import imageIndex from '../../assets/imageIndex';
import font from '../../theme/font';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import CustomButton from '../../compoent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const notesData = [
  { id: '1', title: 'Work/Professional', time: '19/12/2024 04:53PM' },
  { id: '2', title: 'Personal', time: '19/12/2024 04:53PM' },
  { id: '3', title: 'Creative', time: '19/12/2024 04:53PM' },
  { id: '4', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
  { id: '5', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
];

const Voice = () => {
  const renderNote = ({ item }) => (
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
        backgroundColor:"white"
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
  <Text style={styles.subHeader}>Notes</Text>
  <Text style={[styles.subHeader,{
    color:"red",
   }]}>4 records</Text>

  </View>

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
    <CustomButton
            title= {"Start Recording"}
            
            // onPress={() => LoginFunction()
            // }

            //   onPress={() => {
            //     navigation.navigate(ScreenNameEnum.TabNavigator)
            //   }}
            buttonStyle={{ marginHorizontal:15 }}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 24,
    color: '#6A53FB',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 14,
     color:"black",fontWeight:"500"
   },
  createNoteCard: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#6A53FB',
     borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width:"35%",
    height:80,
    justifyContent:"center"
  },
  createIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  createText: {
    color: '#8F52CA',
    fontWeight: '600',
    textAlign:"center",
    fontSize:14
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
     marginBottom: 12,
    marginHorizontal:5,
    ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
        },
        android: {
          elevation: 6,
        },
      }),
      
  },
  iconContainer: {
     borderRadius: 10,
    padding: 10,
  },
  icon: {
    width: 55,
    height: 55,
   },
  noteContent: {
    flex: 1,
    marginLeft: 12,
  },
  noteTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  noteTime: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
  arrowBtn: {
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    color: '#888',
  },
});

export default Voice;
