import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Platform,
} from "react-native";
import imageIndex from "../../../../../assets/imageIndex";
import CustomButton from "../../../../../compoent/CustomButton";
import StatusBarComponent from "../../../../../compoent/StatusBarCompoent";
import CustomHeader from "../../../../../compoent/CustomHeader";
import styles from "./style";
import usemyApointment from "./usemyApointment";
import LoadingModal from "../../../../../utils/Loader";
import moment from "moment";
import { Modal } from "react-native";
import { AirbnbRating } from "react-native-ratings";
 import { KeyboardAvoidingView } from "react-native";
import localizationStrings from "../../../../../Localization/Localization";

 

const MyApointment = () => {
     const {
        myApointement,  
        isLoading, 
        navigation,
        review, setReview ,
        rating, setRating ,
        handleSubmit
        ,
        SubmitCancle,
        isModalVisible, setIsModalVisible,
          setreviewData ,
        isCancelModal, setisCancelModal
    } = usemyApointment();
    console.log("myApointement",myApointement)
  
     const tabs = ['PENDING', 'COMPLETED', 'CANCEL'];
     const [selectedTab, setSelectedTab] = useState('');
     const filteredBookings = myApointement?.filter(item => item?.status === selectedTab);
      return (
        <SafeAreaView style={styles.container}>
                  {isLoading ? <LoadingModal /> : null}

            <StatusBarComponent />
            <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings?.my_appointment} />
            
            {/* Tabs */}
            <View style={styles.tabContainer}>
              {tabs.map(tab => (
                <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={styles.tab}>
                  <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
                    {tab.toUpperCase()}
                  </Text>
                  {selectedTab === tab && <View style={styles.activeUnderline} />}
                </TouchableOpacity>
              ))}
            </View>

             <View style={{ marginHorizontal: 15, marginTop: 11 ,marginBottom:140}}>
                <FlatList
                    data={filteredBookings}
                  
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>{localizationStrings?.not}</Text>}
                    renderItem={({ item  }) =>  {
                         const dateTimeStr =item?.date_time;
                        const formattedDate = moment(dateTimeStr).format('dddd DD MMM  HH:mm'); // e.g. Monday 19 May 07:44
                        return(
                            <View style={styles.card}>
                            <View style={{ flexDirection: "row" }}>
                                <Image
                                resizeMode="contain"
                                source={{ uri: item?.service_detail?.image ? item?.service_detail?.image  :"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" }} style={styles.image} />
                                <View style={styles.infoContainer}>
                                    <Text style={styles.name}>{item.activity_name}</Text>
                                    <View style={styles.row}>
                                        <Image source={imageIndex.location} style={{ height: 20, width: 20 }} resizeMode="contain" />
                                        <Text 
                                         numberOfLines={2}
                                        style={[styles.location,{marginHorizontal:22}]}>{
                                            item?.service_detail?.address
                                                ?.split(" ")                       // split into words
                                                ?.slice(0, 4)                    // get first 50 words
                                                ?.join(" ") + "..."              // rejoin and add ellipsis
                                        }</Text>
                                    </View>
                                    <Text style={styles.date}>{formattedDate}</Text>
                                    
                                    <View style={{
                                        flexDirection:"row",
                                        alignItems:"center",
                                        justifyContent:"space-between"
                                    }}>
                                    <Text style={styles.price}>
                                        {item.amount}.€
                                    </Text>
                                    {item?.status =="COMPLETED" && (
 <Text  
 onPress={() => {
  setIsModalVisible(true);
  setreviewData(item);
}}

    style={{
      fontSize:14,
      color:"black"
    }}>
    🌟 {localizationStrings?.reviews}
    </Text>
                                    )}
                                   
                                    </View>
                                </View> ̰
                            </View> 
                            {(item?.status === "PENDING" || item?.status === "COMPLETED") && (
  <CustomButton
    buttonStyle={styles.cancelView}
    onPress={() => {  
      setisCancelModal(true);
      setreviewData(item);
    }}
    title={localizationStrings?.cancle}
    textStyle={styles.cancelText}
  />
)}

                            

                          
                        </View>
                        )
                    }}
                />
                <Modal
                  visible={isModalVisible}
                  animationType="slide" transparent>
                    <TouchableOpacity onPress={()=> setIsModalVisible(false)} style={{
                      flex:1,
                      justifyContent:"flex-end"
                    }}>
      <KeyboardAvoidingView 
    
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <View style={styles.modalContainer}  >
           <Text style={styles.title}>🌟 {localizationStrings?.rate_your}</Text> 
    
          <Text style={styles.subText}>{localizationStrings?.feedback_prompt}</Text>
          <AirbnbRating
            count={5}
             defaultRating={rating}
            size={20}
            onFinishRating={setRating}
            starContainerStyle={{ marginVertical: 10 }}
          />

          <TextInput
            style={styles.reviewInput}
            placeholder= {localizationStrings?.write_review_here}
            placeholderTextColor="#999"
            value={review}
            onChangeText={setReview}
            multiline
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitText}>{localizationStrings?.submit.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
            </View>
            <Modal visible={isCancelModal}     animationType="slide" transparent >
    <TouchableOpacity onPress={()=> setisCancelModal(false)} style={{
                      flex:1,
                      justifyContent:"center",
                    marginHorizontal:20,
                    alignItems:"center" ,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker for better contrast

                    }}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{localizationStrings?.cancel_booking}</Text>
        <Text style={styles.message}>
          {localizationStrings?.cancel_booking_prompt}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.noButton} onPress={()=> setisCancelModal(false)}>
            <Text style={styles.noText}> {localizationStrings?.no}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton} 
          onPress={SubmitCancle} 
          >
            <Text style={styles.yesText}>{localizationStrings?.yes}</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
    </Modal>
        </SafeAreaView>
    );
};

export default MyApointment;
