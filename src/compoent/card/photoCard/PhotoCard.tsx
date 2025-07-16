import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import ImagLoader from "../../ImagLoader";
import ScreenNameEnum from "../../../routes/screenName.enum";
 
const PhotoCard = ({ item }: any) => {
  const navigation = useNavigation();
  const [imgloading, setImgLoading] = useState(false);
   return (
    <View
      style={{
        width: '32%',
        aspectRatio: 1,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
      }}
    >
      {imgloading && <ImagLoader />}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreenNameEnum.ImageZoom, {
            images: item.file_path,
          })
        }
      >
        <Image
          source={{ uri: item.file_path }}
          style={styles.image}
          onLoadStart={() => setImgLoading(true)}
          onLoadEnd={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoCard;
