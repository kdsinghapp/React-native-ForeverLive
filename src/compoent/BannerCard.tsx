import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';

interface BannerCardProps {
  image: string;
  name: string;
  location?: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ image, name, location = "MOROCCO" }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={{ uri: image }}
        style={{ width: 400, height: 270 }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      >
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}

        <View style={{ padding: 20, borderRadius: 10 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{location}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerContainer: { alignItems: "center", justifyContent: "center", paddingBottom: 20 },
  title: { fontSize: 40, fontWeight: "bold", color: "#fff", marginTop: 50, alignSelf: "center" },
  subtitle: { fontSize: 20, color: "#fff", alignSelf: "center" },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginTop: 20, marginLeft: 15, color: "black" },
  image: { width: 178, height: 154 },
  cardContent: { bottom: 10, marginLeft: 10 },

  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Optional: darken while loading
  },
});

export default BannerCard;
