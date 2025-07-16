import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import imageIndex from "../../../assets/imageIndex";
 
const HomeCard = ({ item }:any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (item?.screen) {
          navigation.navigate(item.screen);
        }
      }}
    >
      <View style={styles.iconContainer}>
        <Image
          source={item.icon}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.arrowContainer}>
        <Text
          style={styles.cardText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.label}
        </Text>
        <Image
          source={imageIndex.arrowRights}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
