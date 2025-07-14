import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video, { OnLoadData, OnProgressData } from "react-native-video";
import imageIndex from "../../assets/imageIndex";

const { width, height } = Dimensions.get("window");

const VideoPlay: React.FC<any> = ({ route, navigation }) => {
  const { item } = route.params;
  const videoPlayer = useRef<any>(null);

  const [paused, setPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const handleProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const handleEnd = () => {
    videoPlayer.current?.seek(0);
    setPaused(true);
  };

  const secondsToTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      {/* Video */}
      <Video
        source={{ uri: item }}
        ref={videoPlayer}
        style={styles.video}
        resizeMode="contain"
        paused={paused}
        muted={isMuted}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onEnd={handleEnd}
      />

      {/* Play/Pause Button */}
      <TouchableOpacity style={styles.playPauseButton} onPress={() => setPaused(!paused)}>
        {/* <Text style={styles.playPauseText}>{paused ? "▶" : "⏸"}</Text>  */}
        {paused ? (
  <Text style={styles.playPauseText}>▶</Text>
) : (
  <Image
    source={imageIndex.playcircle}
    style={{
      height: 66,
      width: 66,
      resizeMode: "contain",
    }}
  />
)}

      
      </TouchableOpacity>

      {/* Bottom Controls */}
      <View style={styles.controls}>
        <Text style={styles.timerText}>
          {secondsToTime(currentTime)} / {secondsToTime(duration)}
        </Text>
        <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
          <Text style={styles.muteText}>{isMuted ? "🔇" : "🔊"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  closeText: {
    color: "#fff",
    fontSize: 28,
  },
  video: {
    width: width,
    height: height,
  },
  playPauseButton: {
    position: "absolute",
    top: height / 2 - 30,
    alignSelf: "center",
    zIndex: 10,
    padding: 20,
  },
  playPauseText: {
    fontSize: 50,
    color: "#fff",
    opacity: 0.8,
  },
  controls: {
    position: "absolute",
    bottom: 40,
    width: width - 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  timerText: {
    color: "#fff",
    fontSize: 16,
  },
  muteText: {
    color: "#fff",
    fontSize: 22,
  },
});

export default VideoPlay;
