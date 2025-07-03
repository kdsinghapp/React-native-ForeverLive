import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
   ImageBackground,
  StatusBar,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import styles from './style';
import slides, { Slide } from './coustomData';
import ScreenNameEnum from '../../../routes/screenName.enum';

const { width } = Dimensions.get('window');

const OnboardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const updateCurrentIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <ImageBackground source={item.image} style={styles.image} resizeMode='cover' />

      <View style={styles.textContainer}>
        <Text style={styles.title}>It’s Picture Time</Text>
        <Text style={styles.description}>
        Start capturing moments that matter{"\n"}forever.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderSlide}
        onScroll={updateCurrentIndex}
        scrollEventThrottle={16}
      />

<View style={{
         alignItems:"center" ,
       }}>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenNameEnum.LoginScreen)}>
          <Image source={imageIndex.nextarrow} style={{
            height:55,
            width:55,
            resizeMode:"contain"
          }} />
        </TouchableOpacity>

       </View>
       <View style={{
        justifyContent:"center",
        alignItems:"center",
       }}>
         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={imageIndex.fram} style={styles.buttonImage} />
        </TouchableOpacity>
        </View>

     </SafeAreaView>
  );
};

export default OnboardingScreen;
