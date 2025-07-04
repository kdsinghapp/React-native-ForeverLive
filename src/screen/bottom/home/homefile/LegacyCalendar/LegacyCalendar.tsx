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
  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  dateRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dateItem: {
    width: 45,
     borderRadius: 20,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height:100

   },
  dateItemSelected: {
    backgroundColor: '#3658AE',
    height:100
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  eventContainer: {
    marginBottom: 10,
  },
  eventDate: {
    backgroundColor: '#E0E6FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
     color: 'black',
    fontFamily:font.PoppinsMedium

  },
  eventCard: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
 
   },
  eventTitle: {
     fontSize: 16,
    marginBottom: 4,
    color: '#000',
    fontFamily:font.PoppinsSemiBold

  },
  eventDescription: {
    fontSize: 14,
    color: '#9E9FA5',
    marginBottom:5,
    marginTop:1
    ,
    fontFamily:font.PoppinsRegular
  },
});

export default LegacyCalendarScreen;
