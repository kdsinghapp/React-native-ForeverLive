import React, { Children, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import imageIndex from '../assets/imageIndex';

const ServicesCard = ({ item, onPress, onFavoritePress, title, ImageProps }: any) => {
  const [loading, setLoading] = useState(true);
   return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.image}>
        <ImageBackground
          source={{ uri: item.image || item.image}}
          style={styles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        >
          {loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="small" color="black" />
            </View>
          )}

          <TouchableOpacity style={styles.favoriteButton} onPress={onFavoritePress}>
            <ImageBackground
              source={imageIndex.whiteCircle}
              style={{
                height: 32,
                width: 32,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="cover"
            >
              {ImageProps ? (<Image
                source={imageIndex.sellerEdit}
                style={{ height: 32, width: 32 }}
                resizeMode="contain"
              />) : <Image
              source={item.is_saved ? imageIndex.heartBlack : imageIndex.BlackHeart}
              style={{ height: 22, width: 22 }}
                resizeMode="contain"
              />}

            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.cardContent}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#101010' }}>
          {item?.title || item?.category_name}
        </Text>
        <Text style={styles.location}>
          {item?.description?.slice(0, 22)}
        </Text>
        <Text style={{
          color: "black",
          fontWeight: "700",
          fontSize: 17
        }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ...existing styles
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    marginHorizontal: 3,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
   
    
  },
  image: {
    width: 178,
    height: 154,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
  },
  cardContent: {
    marginLeft: 10,
    marginBottom: 12,
    marginTop: 5,
  },
  location: {
    color: "#878787",
    fontSize: 12,
    marginTop: 1,
    fontWeight: "600",
  },
});

export default ServicesCard;
