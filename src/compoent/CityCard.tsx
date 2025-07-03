import React, { useState } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

type CityCardProps = {
  image: string;
  name: string;
  onPress?: () => void;
};

const CityCard = ({ image, name, onPress }: CityCardProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity style={styles.cityCard} onPress={onPress}>
      <View style={styles.imageContainer}>
        {loading && (
          <ActivityIndicator
            style={styles.loaderContainer}
            size="small"
            color="#000"
          />
        )}
        <Image
          source={{ uri: image }}
          style={styles.cityImage}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <Text style={styles.cityText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  cityCard: { alignItems: 'center', marginHorizontal: 10 },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
  cityImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  cityText: {
    marginTop: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  serviceCard: { margin: 10 },
  serviceImage: { width: 180, height: 120, borderRadius: 10 },
});
