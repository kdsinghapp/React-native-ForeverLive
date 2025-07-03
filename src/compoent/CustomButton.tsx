import React from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  return (
    <View style={[styles.shadowWrapper, buttonStyle]}>
      <LinearGradient
        start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
        colors={['#8F52CA', '#3658AE', '#19A3BD']}
        style={[styles.gradient, disabled && styles.disabledGradient]}
      >
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          activeOpacity={0.8}
          style={styles.touchable}
        >
          <Text style={[styles.buttonText, textStyle]}>
            {title}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: 'transparent',
      },
      android: {
        elevation: 5,
      },
    }),
  },
  gradient: {
    borderRadius: 15,
  },
  touchable: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  disabledGradient: {
    opacity: 0.5,
  },
});

export default CustomButton;
