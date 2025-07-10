import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import Video, { OnLoadData, OnProgressData } from "react-native-video";
 
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
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      {/* Video Component */}
      <Video
        source={{ uri: item }}
        ref={videoPlayer}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        muted={isMuted}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onEnd={handleEnd}
        repeat={false}
      />

      {/* Play/Pause Center Button */}
      <TouchableOpacity style={styles.centerPlayPause} onPress={() => setPaused(!paused)}>
        {/* <Image
          source={
            paused
              ? require("../../assets/Cropping/videoCircle.png") // Replace with your play icon
              : require("../../assets/Cropping/pause.png")       // Replace with your pause icon
          }
          style={styles.playPauseIcon}
        /> */}
      </TouchableOpacity>

      {/* Time and Mute Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.timerText}>
          {secondsToTime(currentTime)} / {secondsToTime(duration)}
        </Text>
        <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
          <Text style={styles.muteText}>{isMuted ? "Unmute" : "Mute"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "black",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    right: 20,
    zIndex: 10,
  },
  closeText: {
    color: "white",
    fontSize: 24,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  centerPlayPause: {
    position: "absolute",
    top: height / 2 - 25,
    alignSelf: "center",
    zIndex: 5,
  },
  playPauseIcon: {
    height: 50,
    width: 50,
    tintColor: "white",
  },
  bottomBar: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  timerText: {
    color: "white",
    fontSize: 14,
  },
  muteText: {
    color: "white",
    fontSize: 14,
  },
});
