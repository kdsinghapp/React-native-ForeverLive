import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

interface CustomHeaderProps {
  label?: string;
  imageSource: any; // Left icon
  imageSource1?: any; // Right icon
  onPress?: () => void;
  onRightPress?: () => void;
  imageProps?: object;
  showRightIcon?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  label = '',
  imageSource,
  imageSource1,
  onPress,
  onRightPress,
  imageProps = {},
  showRightIcon = false,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  const handleRightPress = () => {
    if (onRightPress) {
      onRightPress();
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <TouchableOpacity onPress={handleBackPress} style={styles.iconLeft}>
        <Image source={imageSource} style={[styles.iconImage, imageProps]} resizeMode="contain" />
      </TouchableOpacity>

      {/* Title */}
      {label !== '' && (
        <Text style={styles.title} numberOfLines={1}>
          {label}
        </Text>
      )}

      {/* Right Icon */}
      {showRightIcon && imageSource1 && (
        <TouchableOpacity onPress={handleRightPress} style={styles.iconRight}>
          <Image source={imageSource1} style={[{
               width: 22,
               height: 22,
          }, imageProps]} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     height: height * 0.05,
    width: '100%',
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconLeft: {
    position: 'absolute',
    left: width * 0.04,
    zIndex: 10,
    padding: 8,
  },
  iconRight: {
    position: 'absolute',
    right: width * 0.04,
    zIndex: 10,
    padding: 8,
  },
  iconImage: {
    width: 27,
    height: 27,
    resizeMode:"contain"
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    maxWidth: width * 0.6,
  },
});

export default CustomHeader;
