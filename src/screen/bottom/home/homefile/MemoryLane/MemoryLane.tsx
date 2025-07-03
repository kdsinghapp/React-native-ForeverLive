import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import imageIndex from '../../../../../assets/imageIndex';
import CustomHeader from '../../../../../compoent/CustomHeader';

const fileData = [
  {
    id: '1',
    name: 'Flight Booking Confirmation',
    size: '3.2 Mb',
    modified: 'Mar 20, 2023',
    icon:imageIndex.mager,
    type: 'folder',
  },
  {
    id: '2',
    name: 'CMR Documents',
    size: '',
    modified: 'Mar 25, 2023',
    icon:imageIndex.mager,
    type: 'folder',
  },
  {
    id: '3',
    name: 'IMG_92884.png',
    size: '267 Kb',
    modified: 'Feb 12, 2023',
    icon:imageIndex.mager,
    type: 'image',
  },
  {
    id: '4',
    name: 'Flight Booking Confirmation',
    size: '3.2 Mb',
    modified: 'Mar 20, 2023',
    icon:imageIndex.mager,
    type: 'folder',
  },
  {
    id: '5',
    name: 'IMG_92884.png',
    size: '267 Kb',
    modified: 'Feb 12, 2023',
    icon:imageIndex.mager,
    type: 'image',
  },
  {
    id: '6',
    name: 'IMG_92884.png',
    size: '267 Kb',
    modified: 'Feb 12, 2023',
    icon:imageIndex.mager,
    type: 'image',
  },
];

const MemoryLane = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileDetails}>
          {item.size ? `${item.size}, ` : ''}
          modified {item.modified}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
       <CustomHeader label='Memory Lane' imageSource={imageIndex.backImg}/>

      <FlatList
        data={fileData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20 }}
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
    marginBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  sortText: {
    fontSize: 20,
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 0.6,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 16,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  fileDetails: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});

export default MemoryLane;
