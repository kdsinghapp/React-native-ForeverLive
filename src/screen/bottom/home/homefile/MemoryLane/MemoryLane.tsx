import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import imageIndex from '../../../../../assets/imageIndex';
import CustomHeader from '../../../../../compoent/CustomHeader';
import { useTheme } from '../../../../../theme/ThemeProvider';
import { Get_Memory } from '../../../../../redux/Api/AuthApi';
import LoadingModal from '../../../../../utils/Loader';
import CircularProgress from 'react-native-circular-progress-indicator';

const MemoryLane = () => {
  const insets = useSafeAreaInsets();
  const { theme }: any = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  const [memoryData, setMemoryData] = useState<any>(null);

  useEffect(() => {
    fetchMemory();
  }, []);

  const fetchMemory = async () => {
    try {
      const response = await Get_Memory(setLoading);
      if (response && response.data) {
        setMemoryData(response.data);
        console.log('Memory Data:', response.data);
      } else {
        console.warn('No response or invalid response data.');
      }
    } catch (error) {
      console.error('Memory fetch error:', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top, backgroundColor: theme.background }]}>
      <CustomHeader label="Memory Lane" imageSource={imageIndex.backImg} />
      {loading && <LoadingModal />}
      
      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.memoryCard} activeOpacity={0.7}>
          <Image source={imageIndex.Countdown} style={styles.icon} />
          <View style={styles.memoryTextSection}>
            <View style={{
              flexDirection:"column"
            }}>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
           Image
            </Text>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
              {memoryData?.images || 0} Mb
            </Text>
            </View>
            <CircularProgress
              value={memoryData?.images || 0}
              radius={27}
              duration={1000}
              activeStrokeColor="#3658AE"
              inActiveStrokeColor="#DCDDF0"
              inActiveStrokeOpacity={0.5}
              progressValueFontSize={18}
              showPercentage={false}
              progressValue={false}
              titleColor="#333"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.memoryCard} activeOpacity={0.7}>
          <Image source={imageIndex.Countdown} style={styles.icon} />
          <View style={styles.memoryTextSection}>
            <View style={{
              flexDirection:"column"
            }}>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
           Video
            </Text>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
              {memoryData?.videos || 0} Mb
            </Text>
            </View>
            <CircularProgress
              value={memoryData?.videos || 0}
              radius={27}
              duration={1000}
              activeStrokeColor="#3658AE"
              inActiveStrokeColor="#DCDDF0"
              inActiveStrokeOpacity={0.5}
              progressValueFontSize={18}
              showPercentage={false}
              progressValue={false}
              titleColor="#333"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.memoryCard} activeOpacity={0.7}>
          <Image source={imageIndex.Countdown} style={styles.icon} />
          <View style={styles.memoryTextSection}>
            <View style={{
              flexDirection:"column"
            }}>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
            Audios
            </Text>
            <Text style={[styles.memorySizeText, { color: theme.text }]}>
              {memoryData?.audios || 0} Mb
            </Text>
            </View>
            <CircularProgress
              value={memoryData?.audios || 0}
              radius={27}
              duration={1000}
              activeStrokeColor="#3658AE"
              inActiveStrokeColor="#DCDDF0"
              inActiveStrokeOpacity={0.5}
              progressValueFontSize={18}
              showPercentage={false}
              progressValue={false}
              titleColor="#333"
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  memoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom:18
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 16,
    resizeMode: 'contain',
  },
  memoryTextSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memorySizeText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MemoryLane;
