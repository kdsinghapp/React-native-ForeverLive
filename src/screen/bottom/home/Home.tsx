import React from 'react';
import {
  View,
  Text,
   TouchableOpacity,
  Image,
   FlatList,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import styles from './style';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';

const data = [
  { label: 'Memory Lane ', icon:imageIndex.memory ,screen:ScreenNameEnum.MemoryLane},
  { label: 'Vault Access',  icon:imageIndex.VaultAccess,screen:ScreenNameEnum.VaultAccess },
  // { label: 'Countdown Moments',icon:imageIndex.Countdown,screen:ScreenNameEnum.LegacyCalendar},
  { label: 'Countdown Moments',icon:imageIndex.Countdown,screen:ScreenNameEnum.Countdown},
  { label: 'Legacy Calendar',icon:imageIndex.Calendar ,screen:ScreenNameEnum.LegacyCalendar},
  { label: 'Legacy Value',icon:imageIndex.Legacy,screen:ScreenNameEnum.MemoryLane},
  { label: 'Coming Soon',icon:imageIndex.Comin,screen:ScreenNameEnum.MemoryLane },
];

const HomeScreen = () => {
  const { theme }:any = useTheme();

  const na = useNavigation()
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}  
    onPress={()=>{
      na.navigate(item?.screen)
    }}
    >
      <View style={styles.iconContainer}>
        <Image
          source={item.icon}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.arrowContainer}>
      <Text
  style={styles.cardText}
  numberOfLines={2}
  ellipsizeMode="tail"
>
  {item.label}
</Text>

        <Image
          source={imageIndex.arrowRights}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}> 
    <StatusBarComponent/>
    <View style={styles.header}>
        <View>
          <Text style={[styles.welcomeText,{
                  color:theme.text

          }]}>Welcome back</Text>
          <Text style={[styles.userName,{
                  color:theme.text

          }]}>Adison Mango</Text>
        </View>
        <TouchableOpacity>
          <Image source={imageIndex.HomeProfile} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
  

      <FlatList
        data={data}
        numColumns={2}
   
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
        columnWrapperStyle={styles.row}
        // contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
