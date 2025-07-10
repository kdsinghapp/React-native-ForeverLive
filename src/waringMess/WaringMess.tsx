// components/Toast.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ToastProps {
  visible: boolean;
  message: string;
  onHide: () => void;
}

const WaringMess: React.FC<ToastProps> = ({ visible, message, onHide }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(onHide);
    }
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    zIndex: 1000,
    width: width * 0.9,
    elevation: 5,
  },
  toastText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default WaringMess;
