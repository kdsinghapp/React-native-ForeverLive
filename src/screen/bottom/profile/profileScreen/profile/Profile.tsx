import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, SafeAreaView, Button } from "react-native";
import imageIndex from "../../../../../assets/imageIndex";
import StatusBarComponent from "../../../../../compoent/StatusBarCompoent";
import styles from "./style";
import LogoutModal from "../../../../../compoent/LogoutModal";
import { menuItems, menuItems2, menuItems3 } from "./data";
import useProfile from "./useProfile";
import ScreenNameEnum from "../../../../../routes/screenName.enum";
import localizationStrings from "../../../../../Localization/Localization";
import { useIsFocused } from "@react-navigation/native";

const Profile = () => {
  const {
    logoutModal, setLogoutModal,
    handleLogout, navigation,
    getLogin,
    isLogin
  } = useProfile();

  const [menu,setmenuItems] = useState <any>() 
  const [menu2,setmenu2] = useState <any>() 
  const [menu3,setmenu3] = useState <any>() 
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setmenuItems(menuItems);
      setmenu2(menuItems2);
      setmenu3(menuItems3);
    }
  }, [isFocused]);
  
  const MenuItem = ({ title, icon, screen }: any) => {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={() => {
        if (screen === "logout") {
          setLogoutModal(true);
        } else {
          navigation.navigate(screen);
        }
      }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icon} style={{
            height: 26,
            width: 26
          }}
            resizeMode="contain"
          />
          <Text style={styles.menuText}>{title.toUpperCase()}</Text>
        </View>
        <Image source={imageIndex.arrowRight} style={{
          height: 23,
          width: 23
        }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBarComponent />
      <ScrollView style={styles.container}>
        <Text style={{
          fontSize: 19,
          color: 'black',
          marginLeft: 15,
          fontWeight: "600"
        }}>{localizationStrings?.profile}</Text>
        <TouchableOpacity style={styles.profileHeader}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(ScreenNameEnum.EditProfile)}>
          <View
            style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Image source={getLogin?.userGetData?.image ? { uri: getLogin?.userGetData?.image } : {uri:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"}} style={styles.avatar} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                {getLogin?.userGetData?.user_name?.toUpperCase()}
              </Text>
              <TouchableOpacity  >
                <Text style={styles.profileLink}>{localizationStrings?.view_my_profile}</Text>
                <Text style={styles.profileLink}>{getLogin?.userGetData?.email}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={imageIndex.arrowRight} style={{
            height: 23,
            width: 23
          }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{
          height: 18,
          backgroundColor: "rgba(237, 243, 243, 1)"
        }} />
        <View>
          {isLogin?.userData?.type === "Seller" ? (
            <FlatList
              data={menu3}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <MenuItem title={item.title} icon={item.icon} screen={item.screen} />
              )}
            />
          ) : (
            <FlatList
              data={menu2}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <MenuItem title={item.title} icon={item.icon} screen={item.screen} />
              )}
            />
          )}
        </View>
        <View style={{
          height: 18,
          backgroundColor: "rgba(237, 243, 243, 1)"
        }} />
        <View  >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={menu}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <MenuItem title={item?.title} icon={item?.icon} screen={item?.screen} />}
          />
        </View>
        <LogoutModal visible={logoutModal} onClose={() => setLogoutModal(false)}
          onConfirm={() => handleLogout()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};




export default Profile;