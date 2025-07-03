import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, } from "react-native";
import StatusBarComponent from "../../../compoent/StatusBarCompoent";
import SearchBar from "../../../compoent/SearchBar";
import ScreenNameEnum from "../../../routes/screenName.enum";
import styles from "./style";
import EmptyListComponent from "../../../compoent/EmptyListComponent";
import Loading from '../../../utils/Loader';
import ServicesCard from "../../../compoent/ServicesCard";
 import useServices from "./useServices";
import localizationStrings from "../../../Localization/Localization";
 
const Service = () => {
  const {
    navigation,
    loading,
      FavoriteApi,
    LikeLoading,
    filteredData,
    searchQuery,
    setSearchQuery
  } = useServices()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBarComponent backgroundColor="transparent" translucent={true} />
      {loading ? <Loading /> : null}
      {LikeLoading ? <Loading /> : null}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionTitle, {
          marginTop: 40
        }]}>
          SERVICE
        </Text>
        <View
          style={{
            marginHorizontal: 8,
            marginTop: 15
          }}
        >
          <SearchBar value={searchQuery}
      onSearchChange={setSearchQuery}
 />
        </View>
        <View style={{ marginHorizontal: 3, }}>
 
          <View style={styles.rowView}>
            <Text style={styles.sectionTitle}>
              {localizationStrings?.all_services}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenNameEnum.Services)}>
              <Text style={[styles.sectionTitle, {
                right: 5
              }]}>
 {localizationStrings?.more}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredData}
            style={{ marginTop: 5 }}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={<EmptyListComponent message={localizationStrings?.not_found_data} />}
            renderItem={({ item }) => (
              <ServicesCard
                item={item}
                onPress={() => navigation.navigate(ScreenNameEnum.MakeDetails, { item })}

                onFavoritePress={() => FavoriteApi(item)}
              />
            )}
            contentContainerStyle={styles.list}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Service;
