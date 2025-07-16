import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
   Platform,
 } from 'react-native';
 import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';
import styles from './style';
import Voice from '../../voice/Voice';
import EmptyListComponent from '../../../compoent/EmptyListComponent';
 
const tabs = ['Capsules', 'Letters', 'Audio',  ];

const data = [
  { id: '1', title: 'My 40th Birthday Letter', date: '24 Dec 2035' },
  { id: '2', title: 'Sofia 19th Birthday Letter', date: '24 Dec 2035' },
  { id: '3', title: 'My 40th Birthday Letter', date: '24 Dec 2035' },
];

const VaultScreen = () => {
  const [activeTab, setActiveTab] = useState('Capsules');
  const { theme }:any = useTheme();

  const renderItem = ({ item }:any) => (
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
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent/>
      <Text style={[styles.header,{
              color:theme.text

      }]}>Vault</Text>
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
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} 
        ListEmptyComponent={() => <EmptyListComponent />}

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


