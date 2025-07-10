// components/CustomLoader.tsx

import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const ImagLoader = () => {
  return (
    <ActivityIndicator
      size="small"
      color="#007BFF"
      style={styles.loader}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default ImagLoader;
