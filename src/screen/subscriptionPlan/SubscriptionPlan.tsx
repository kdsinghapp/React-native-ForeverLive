import React from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../assets/imageIndex';
import CustomButton from '../../compoent/CustomButton';
import CustomHeader from '../../compoent/CustomHeader';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
 import styles from './style';
import useSubscriptionPlan from './useSubscriptionPlan';
import LoadingModal from '../../utils/Loader';
import EmptyListComponent from '../../compoent/EmptyListComponent';
import localizationStrings from '../../Localization/Localization';
  
const SubscriptionPlan = () => {
const {    navigation,
  loading,
  setLoading,
  theme,
  plan, setplan} =useSubscriptionPlan()

  const PlanCard = ({ item }) => {
    // Parse price string
    const priceArray = item.price?.split(" or ") || [];
  
    // Parse feature string safely
    let priceArray1 = [];
    try {
      const fixedString = item.feacture?.replace(/'/g, '"');  // Replace ' with "
      priceArray1 = fixedString ? JSON.parse(fixedString) : [];
    } catch (e) {
      console.warn('Failed to parse feacture:', e);
      priceArray1 = [];
    }
  
    return (
      <LinearGradient
        start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
        colors={['#8F52CA', '#3658AE', '#19A3BD']}
        style={styles.cardWrapper}
      >
        <View style={styles.card}>
          <Image source={imageIndex?.free} style={styles.icon} />
          <Text style={styles.planTitle}>{item.title} Plan</Text>
          {priceArray.map((price, index) => (
            <Text key={index} style={{marginTop:11, color: "black", fontSize: 15, marginBottom: 2, bottom: 11 }}>
               {price}
            </Text>
          ))}
          {/* Render parsed features */}
          {priceArray1.map((price, index) => (
            <Text key={index} style={styles.description}>
              {price}
            </Text>
          ))}
  
          {/* Description fallback */}
          <Text style={styles.description}>
            {item.description || "3 uploads, 1 trusted contact, 1 social platform"}
          </Text>
  
          {/* Render price options */}
       
  
          <TouchableOpacity style={styles.button}>
            <CustomButton title={localizationStrings?.UpgradeNow} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };
  
  
  return (
   <SafeAreaView style={{
    flex:1,
    backgroundColor:theme.background
   }}>
    <StatusBarComponent/>
    {loading ? <LoadingModal /> : null}

                    <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings.SubscriptionPlan}/>

     <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
     <FlatList
      data={plan}
      keyExtractor={(item:any) => item.id.toString()}
      ListEmptyComponent={() => {
        return(
          <EmptyListComponent/>
        )
      }}
      renderItem={({ item }) => <PlanCard item={item} />}
     />

 
   
    </ScrollView>
   </SafeAreaView>
  );
};



export default SubscriptionPlan;
