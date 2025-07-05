import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
   Image,
   ScrollView,
  Platform,
} from 'react-native';
 import StatusBarComponent from '../../../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../../../compoent/CustomHeader';
import imageIndex from '../../../../../assets/imageIndex';
import font from '../../../../../theme/font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../../../theme/ThemeProvider';
 
const activities = [
  { id: 1, title: 'New Document Added', time: 'Just now', tag: 'New' },
  { id: 2, title: 'Video Message Received', time: '15 mins ago', tag: '' },
  { id: 3, title: 'Support Ticket #2023–456', time: 'Just now', tag: '' },
  { id: 4, title: 'New Policy Details', time: 'Just now', tag: 'New' },
  { id: 5, title: 'New Policy Details', time: 'Just now', tag: 'New' },
];

const VaultAccessScreen = () => {
  const renderItem = ({ item }:any) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
       <Image source={imageIndex.Comin} style={{
        height:33,
        width:33,
        resizeMode:"contain"
       }}/>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>Investment portfolio Q3 report available</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        {item.tag ? (
          <View style={styles.newTag}>
            <Text style={styles.newText}>New</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent/>
      <CustomHeader label='Vault Access' imageSource={imageIndex.backImg}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{
        marginHorizontal:15
      }}>
       
        <View style={styles.vaultCard}>
          <Text style={styles.vaultTitle}>🔐 </Text>
          <Text style={styles.vaultTitle}>Vault Access</Text>
          <Text style={styles.vaultSubtitle}>View saved letters, videos, messages</Text>
          <View style={styles.progressBarBg}>
            <View style={styles.progressBarFill} />
          </View>
          <Text style={styles.progressText}>75% full</Text>
        </View>

        {/* Recent Activity */}
        <Text style={[styles.sectionTitle,{
          color:theme.text
        }]}>Recent Activity</Text>
        <FlatList
          data={activities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VaultAccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    alignSelf: 'center',
  },
  vaultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    marginTop:20,
    marginHorizontal:6,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
        shadowColor: '#000', // Optional but harmless
      },
    }),
 
  
  },
  vaultTitle: {
     fontSize: 24,
    marginBottom: 4,
    color:"black",
    marginTop:4,
    fontFamily:font.PoppinsBold
  },
  vaultSubtitle: {
    fontSize: 13,
    color: '#777',
    marginBottom: 10,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '75%',
    height: 6,
    backgroundColor: '#3658AE',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    marginHorizontal:3,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
        shadowColor: '#000', // Optional but harmless
      },
    }),
 
  },
  iconContainer: {
    marginRight: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  newTag: {
    backgroundColor: '#3658AE',
    paddingHorizontal: 8,
    paddingVertical: 11,
    borderRadius: 15,
    marginTop: 4,
  },
  newText: {
    color: '#fff',
    fontSize: 10,
  },
});
