import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import CustomHeader from '../../compoent/CustomHeader';
import imageIndex from '../../assets/imageIndex';
import { useTheme } from '../../theme/ThemeProvider';

const ImageZoom = ({ route }: any) => {
  const { images } = route.params;

  const formattedImages = Array.isArray(images)
    ? images.map(url => ({ url }))
    : [{ url: images }];
    const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
        backgroundColor: theme.background,
    }]}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label={"Image View"} />

      <View style={styles.viewerWrapper}>
        <ImageViewer
          imageUrls={formattedImages}
          enableSwipeDown={true}
          renderIndicator={() => null}
          loadingRender={() => (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
          backgroundColor="white" // This line is important for iOS
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewerWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageZoom;
