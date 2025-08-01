import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme/ThemeProvider';
import styles from './style';
import EmptyListComponent from '../../../compoent/EmptyListComponent';
import useVault from './useVault';
 import { Dimensions } from 'react-native';
import PlayAudio from '../../../compoent/PlayAudio/PlayAudio';
import moment from 'moment';
import ScreenNameEnum from '../../../routes/screenName.enum';

const tabs = ['Capsules', 'Photos', 'Audio'];

const VaultScreen = () => {
  const [activeTab, setActiveTab] = useState('Capsules');
  const [dataList, setDataList] = useState([]);
  const { theme }: any = useTheme();

  const {
    navigation,
    loading,
    fetchCapsules,
    fetchLetters,
    fetchAudio,
    capsulesList,
    lettersList,
    audioList,
    isModalVisible1, setModalVisible1 ,
     recordedPath, setRecordedPath
    
  } = useVault();

  useEffect(() => {
    if (activeTab === 'Capsules') fetchCapsules();
    else if (activeTab === 'Photos') fetchLetters();
    else if (activeTab === 'Audio') fetchAudio();
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'Capsules') setDataList(capsulesList);
    else if (activeTab === 'Photos') setDataList(lettersList);
    else if (activeTab === 'Audio') setDataList(audioList);
  }, [capsulesList, lettersList, audioList, activeTab]);

  const CapsuleCard = ({ item }: any) => {
    const formattedDate = item.created_at
      ? moment(item.created_at).format('MMM DD, YYYY')
      : 'No Date';
  
    return (
      <View style={[styles.cardContainer]}>
        <Image source={imageIndex.Group} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title || 'Capsule Title'}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
        <Image source={imageIndex.lock} style={styles.lockIcon} />
      </View>
    );
  };
  

 
  const AudioCard = ({ item }: any) =>  {
     const createdAt = item?.created_at;
    const formattedDate = moment(createdAt, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY, h:mm A");
    return(
      <View style={[styles.audioCard ]}>
      <View style={styles.audioContent}>
        <Image source={imageIndex.voies} style={styles.audioIcon} />
        <View style={{
          marginLeft:11
        }}>
          <Text style={styles.audioTitle}>{item.title || 'Audio Title'}</Text>
          <Text style={styles.audioDate}>{formattedDate}</Text>
        </View>
      </View>
      <TouchableOpacity 
       onPress={() => {
        setRecordedPath(item.file_path); // <-- Your audio URL here
        setModalVisible1(true);
      }}
      >
        <Image source={imageIndex.videoplay} style={styles.playIcon} />
      </TouchableOpacity>
    </View>
    )
  }
  const { width } = Dimensions.get('window');
  const PhotoCard1 = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.photoCardContainer} 
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate(ScreenNameEnum.ImageZoom, {
          images: item.file_path,
        })
      }
      >
        <ImageBackground
          source={{ uri: item.file_path }}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
        >
           <View style={styles.overlay} />
          <View style={styles.textContainer1}>
            <Text style={styles.photoTitle}>{item?.file_name || 'Photo Title'}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  
  
  const renderItem = ({ item }: any) => {
    if (activeTab === 'Capsules') return <CapsuleCard item={item} />;
    if (activeTab === 'Photos') return <PhotoCard1  item={item} />;
    if (activeTab === 'Audio') return <AudioCard item={item} />;
    return null;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBarComponent />
      <Text style={[styles.header, { color: theme.text }]}>Vault</Text>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={theme.primary} style={{ marginTop: 20 }} />
      ) : (
        <FlatList 
        style={{
          marginTop:18
        }}
          data={dataList}
          keyExtractor={(item: any, index) => item?.id?.toString() || index.toString()}
          renderItem={renderItem}
           showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyListComponent />}
            contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

      <TouchableOpacity style={styles.fab} 
      
      onPress={() =>
        navigation.navigate(ScreenNameEnum.PhotoUpload)
      }
      >
        <Image source={imageIndex.flooter} style={{ height: 60, width: 60 }} />
      </TouchableOpacity>
      <PlayAudio
        visible={isModalVisible1}
        onClose={() => setModalVisible1(false)}
         audioUri={recordedPath}
       />
    </SafeAreaView>
  );
};

export default VaultScreen;
