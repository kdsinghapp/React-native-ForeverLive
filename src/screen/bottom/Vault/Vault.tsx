import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
   Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const tabs = ['Capsules', 'Letters', 'Audio',  ];

const data = [
  { id: '1', title: 'My 40th Birthday Letter', date: '24 Dec 2035' },
  { id: '2', title: 'Sofia 19th Birthday Letter', date: '24 Dec 2035' },
  { id: '3', title: 'My 40th Birthday Letter', date: '24 Dec 2035' },
];

const VaultScreen = () => {
  const [activeTab, setActiveTab] = useState('Capsules');

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={imageIndex.Group} // your local icon
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Image
        source={imageIndex.lock} // your local icon
        style={{
          height:28,
          width:28,
          resizeMode:"contain"
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent/>
      <Text style={styles.header}>Vault</Text>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
       
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
         ))}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} 
        style={{
          marginHorizontal:15 ,
          marginTop:15

        }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.fab}>
       
      <Image source={imageIndex?.flooter} style={{

        height:60,
        width:60
      }}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 12,
    marginHorizontal:15
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal:15,
    marginTop:15

  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    marginRight: 10,
    height:46,
    justifyContent:"center"
  },
  activeTab: {
    backgroundColor: '#6C5DD3',
  },
  tabText: {
    color: '#000',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 1,
  
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  fabGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabPlus: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
