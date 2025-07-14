import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Platform, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
 import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation,   } from '@react-navigation/native';
import { useTheme } from '../../../theme/ThemeProvider';
import styles from './style';

const data = [
  { id: '1', label: 'PHOTO', screen:ScreenNameEnum.PhotoUpload,icon: imageIndex.videoplay,icon1: imageIndex.gallery1  },
  { id: '2', label: 'VIDEO', screen:ScreenNameEnum.VideoUpload, icon: imageIndex.videoplay,icon1: imageIndex.microphone },
  { id: '3', label: 'TEXT',screen:ScreenNameEnum.TextScreen, icon: imageIndex.text ,icon1: imageIndex.text},
  { id: '4', label: 'VOICE',screen:ScreenNameEnum.Voice, icon: imageIndex.microphone ,icon1: imageIndex.microphone},
  // { id: '5', label: 'AI PROMPT', icon: imageIndex.gallery1 ,icon1: imageIndex.video},
];
const CustomCard = ({ item, isActive, onPress }: any) => {
  const CardContent = () => (
    <View style={styles.cardContent}>
      <View style={styles.iconLabel}>
        <Image
        
        
        source={
           // Selected: show arrow
            item.icon // Unselected: show custom image
        }
      style={styles.iconStyle} />
        <Text style={[styles.label,]}>{item.label}</Text>
      </View>

      {/* 👇 Right side icon based on active status */}
      <Image
        source={imageIndex.arrowRights
          // isActive
          //   ? imageIndex.arrowright // Selected: show arrow
          //   : imageIndex.arrowRights // Unselected: show custom image
        }
        style={styles.iconStyle}
      />
    </View>
  );

  const Wrapper = isActive ? LinearGradient : View;
  const wrapperProps = isActive
    ? { colors: ['#3658AE', '#8F52CA'], style: styles.gradientCard }
    : { style: styles.gradientCard };

  return (
    <TouchableOpacity style={styles.shadowWrapper} onPress={onPress}>
      {/* <Wrapper {...wrapperProps}> */}
        <CardContent />
      {/* </Wrapper> */}
    </TouchableOpacity>
  );
};


const Picture = () => {
  const [selectedId, setSelectedId] = useState<string>('1'); // Default active
const navigation = useNavigation()
const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent />
      <Text style={[styles.title,{
         color:theme.text
      }]}>Picture Time Flow</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomCard
            item={item}
            isActive={item.id === selectedId}
            onPress={() => {
              // setSelectedId(item?.id); // select card
              navigation.navigate(item?.screen,{
                type:item?.label
              }); // navigate to screen
            }}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Picture;


