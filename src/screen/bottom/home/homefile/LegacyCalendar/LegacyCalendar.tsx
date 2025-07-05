import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
   StyleSheet,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../../../../compoent/CustomHeader';
import imageIndex from '../../../../../assets/imageIndex';
import font from '../../../../../theme/font';
import StatusBarComponent from '../../../../../compoent/StatusBarCompoent';
import { useTheme } from '../../../../../theme/ThemeProvider';
import styles from './style';
 
const dates = [
  { day: '16', label: 'S' },
  { day: '17', label: 'M' },
  { day: '18', label: 'T' },
  { day: '19', label: 'W' },
  { day: '20', label: 'T', selected: true },
  { day: '21', label: 'F' },
];

const events = [
  {
    id: '1',
    date: 'June 12, 2024',
    title: "Grandma's Remembrance",
    description: "Annual gathering to honor Grandma Evelyn’s loving memory.",
  },
  {
    id: '2',
    date: 'June 12, 2024',
    title: "Grandma's Remembrance",
    description: "Annual gathering to honor Grandma Evelyn’s loving memory.",
  },
  {
    id: '3',
    date: 'June 12, 2024',
    title: "Grandma's Remembrance",
    description: "Annual gathering to honor Grandma Evelyn’s loving memory.",
  },
];

const LegacyCalendarScreen = () => {
  const [dates, setDates] = useState([
    { day: '16', label: 'S' },
    { day: '17', label: 'M' },
    { day: '18', label: 'T' },
    { day: '19', label: 'W' },
    { day: '20', label: 'T', selected: true },
    { day: '21', label: 'F' },
  ]);

  const handlePress = (index:any) => {
    const updated = dates.map((item, i) => ({
      ...item,
      selected: i === index,
    }));
    setDates(updated);
  };
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent/>
     <CustomHeader label='Legacy Calendar' imageSource={imageIndex.backImg}/>
      {/* Date Selector */}
      
      <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
  <FlatList
    horizontal
    data={dates}
    keyExtractor={(_, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={[styles.dateItem, item.selected && styles.dateItemSelected]}
      >
        <Text style={[styles.dateLabel, item.selected && styles.selectedText]}>
          {item.label}
        </Text>
        <Text style={[styles.dateNumber, item.selected && styles.selectedText]}>
          {item.day}
        </Text>
      </TouchableOpacity>
    )}
  />
</View>


       <FlatList
       style={{
        marginTop:15
       }}
             showsVerticalScrollIndicator={false}

        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.eventDate}>{item.date}</Text>
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};


export default LegacyCalendarScreen;
