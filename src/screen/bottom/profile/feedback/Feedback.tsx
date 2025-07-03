import React from 'react';
import { View, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import imageIndex from '../../../../assets/imageIndex';
import CustomHeader from '../../../../compoent/CustomHeader';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
import CustomButton from '../../../../compoent/CustomButton';
import styles from './style';
import useFeedBack from './useFeedBack';
import { Rating } from 'react-native-ratings';
import LoadingModal from '../../../../utils/Loader';
import localizationStrings from '../../../../Localization/Localization';

const Feedback = () => {
  const {
    isLoading,
    navigation,
    sumTitle, setsumTitle,
    handleSubmit,
    rating, setRating
  } = useFeedBack()
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <StatusBarComponent />
      {isLoading ? <LoadingModal /> : null}
      <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings?.send_your_feedback} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={imageIndex.myOldLogo} style={styles.logo} />
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 45 }}>
            <Rating
              type="custom"
              ratingColor="#FFD700" // स्टार का कलर
              ratingBackgroundColor="#fef0c3" // बैकग्राउंड कलर
              startingValue={rating}
              minValue={1}
              fractions={2}
              style={{ paddingVertical: 10, margin: 12 }}
              imageSize={30}
              onFinishRating={setRating}
            />

          </View>
          <View style={styles.inputContainer}>
            <Image source={imageIndex.edit} style={{
              height: 18,
              width: 18,
              bottom: 23
            }}
              tintColor={"black"}
              resizeMode='cover'
            />
            <TextInput
              style={styles.input}
              placeholder={localizationStrings?.leave_review}
              value={sumTitle}
              placeholderTextColor={"#9796A1"}
              onChangeText={setsumTitle}
              multiline
            />
          </View>

        </View>
      </ScrollView>
      <View style={{
        justifyContent: 'flex-start', marginBottom: 15,
        marginHorizontal: 15

      }}>
        <CustomButton
          title={localizationStrings?.submit}
          onPress={() => handleSubmit()}
        />
      </View>

    </SafeAreaView>
  );
};



export default Feedback;
