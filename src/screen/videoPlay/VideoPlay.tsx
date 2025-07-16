import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "react-native-video";
import imageIndex from "../../assets/imageIndex";
import StatusBarComponent from "../../compoent/StatusBarCompoent";
import CustomHeader from "../../compoent/CustomHeader";
import { useTheme } from "../../theme/ThemeProvider";

const { width, height } = Dimensions.get("window");

const VideoPlay: React.FC<any> = ({ route }) => {
  const { item } = route.params;
  const videoPlayer = useRef<any>(null);

  const [paused, setPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label={"Video View"} />

      <View style={styles.videoWrapper}>
        <Video
          source={{ uri: item }}
          ref={videoPlayer}
          style={styles.video}
          resizeMode="contain"
          paused={paused}
          muted={isMuted}
          controls={true}
          onLoad={() => setLoading(false)}
        />

        {/* Loader */}
        {/* {loading && (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={styles.loader}
          />
        )}

         <TouchableOpacity
          onPress={() => setPaused(!paused)}
          style={styles.centerButton}
        >
          <Text style={styles.playPauseText}>{paused ? "▶" : "⏸"}</Text>
        </TouchableOpacity>

         <View style={styles.bottomControls}>
          <TouchableOpacity onPress={() => setMuted(!isMuted)}>
            <Text style={styles.controlText}>
              {isMuted ? "Unmute 🔈" : "Mute 🔇"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPaused(!paused)}>
            <Text style={styles.controlText}>
              {paused ? "Play ▶" : "Pause ⏸"}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: width,
    height: height * 0.8,
  },
  loader: {
    position: "absolute",
    top: height * 0.4,
    alignSelf: "center",
  },
  centerButton: {
    position: "absolute",
    alignSelf: "center",
    top: "40%",
    zIndex: 5,
  },
  playPauseText: {
    fontSize: 64,
    color: "white",
    opacity: 0.8,
  },
  bottomControls: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
  },
  controlText: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#333",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
});

export default VideoPlay;
