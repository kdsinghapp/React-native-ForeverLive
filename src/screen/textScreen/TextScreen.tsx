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
import { SafeAreaView } from 'react-native-safe-area-context';

const notesData = [
  { id: '1', title: 'Work/Professional', time: '19/12/2024 04:53PM' },
  { id: '2', title: 'Personal', time: '19/12/2024 04:53PM' },
  { id: '3', title: 'Creative', time: '19/12/2024 04:53PM' },
  { id: '4', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
  { id: '5', title: 'Miscellaneous', time: '19/12/2024 04:53PM' },
];

const TextScreen = () => {
  const renderNote = ({ item }) => (
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
        backgroundColor:"white"
    }}> 
    <StatusBarComponent/> 
    <CustomHeader label='Text' imageSource={imageIndex?.backImg}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

      <Text style={styles.subHeader}>Your Template</Text>

      <TouchableOpacity style={styles.createNoteCard}>
        <Image
          source={imageIndex.note}
          style={styles.createIcon}
        />
        <Text style={styles.createText}>Create Note</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>Notes</Text>

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

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
    fontSize: 18,
     color:"black",
    fontFamily:font.PoppinsSemiBold,
    marginBottom:11
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
    color: 'gray',
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

export default TextScreen;
