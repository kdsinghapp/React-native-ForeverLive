import React  from "react";
import { View, Text, Switch, SafeAreaView } from "react-native";
import CustomHeader from "../../../../compoent/CustomHeader";
import imageIndex from "../../../../assets/imageIndex";
import StatusBarComponent from "../../../../compoent/StatusBarCompoent";
import styles from "./style";
import useNotification from "./useNotification";
import localizationStrings from "../../../../Localization/Localization";

const Notification = () => {

  const settingOptions = [
    { label: localizationStrings?.general_notification, key: "generalNotification" },
    { label: localizationStrings?.sound, key: "sound" },
    { label:localizationStrings?.vibrate, key: "vibrate" },
    { label:localizationStrings?.app_updates, key: "appUpdates" },
  ];
  const {
    isLoading,
    navigation,
    settings, setSettings,
    toggleSwitch
  } = useNotification()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBarComponent />
      <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings.notification} />
      <View style={styles.container}>
        {settingOptions.map(({ label, key }) => (
          <View key={key} style={styles.settingRow}>
            <Text style={styles.settingText}>{label}</Text>
            <Switch
              value={settings[key]}
              onValueChange={() => toggleSwitch(key)}
              trackColor={{ false: "#9796A1", true: "#000000" }}
              thumbColor="white"
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Notification;
