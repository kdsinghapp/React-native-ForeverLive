import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

interface CategoryCardProps {
  image: string;
  title: string;
  onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, onPress }) => {
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.card}
        imageStyle={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      >
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="black" />
          </View>
        )}
        <Text style={styles.categoryName}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 178,
    height: 154,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
  },
  categoryName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
});

export default CategoryCard;
