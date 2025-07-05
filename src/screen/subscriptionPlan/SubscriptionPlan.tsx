import React from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '../../assets/imageIndex';
import CustomButton from '../../compoent/CustomButton';
import CustomHeader from '../../compoent/CustomHeader';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeProvider';
  
const SubscriptionPlan = () => {
  const { theme }:any = useTheme();

  return (
   <SafeAreaView style={{
    flex:1,
    backgroundColor:theme.background
   }}>
    <StatusBarComponent/>
                    <CustomHeader imageSource={imageIndex.backImg} label={"Subscription Plan"}/>

     <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
 
      {/* Freemium Plan */}
      <LinearGradient  start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
        colors={['#8F52CA', '#3658AE', '#19A3BD']} style={styles.cardWrapper}>
        <View style={styles.card}>
           
          <Image source={imageIndex?.free} style={styles.icon} />
          <Text style={styles.planTitle}>Freemium Plan</Text>
          <Text style={styles.description}>
            3 uploads, 1 trusted contact, 1 social platform
          </Text>
          <TouchableOpacity style={styles.button}>
          <CustomButton title={"Upgrade Now"} />

          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Premium Plan */}
      <LinearGradient         start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
        colors={['#8F52CA', '#3658AE', '#19A3BD']}
 style={styles.cardWrapper}>
        <View style={styles.card}>
           
          <Image source={imageIndex?.free} style={styles.icon} />
          <Text style={styles.planTitle}>$9.99/month{'\n'}or $59/year</Text>
          <Text style={styles.description}>
            Includes 3 social platforms, full memory vault access, scheduler
          </Text>
          <TouchableOpacity style={styles.button}>
            {/* <LinearGradient colors={['#5F72BE', '#9B23EA']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Upgrade Now</Text>
            </LinearGradient> */}
            <CustomButton title={"Upgrade Now"} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Premier Plan */}
      <LinearGradient         start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 0 }}
        colors={['#8F52CA', '#3658AE', '#19A3BD']}
 style={styles.cardWrapper}>
        <View style={styles.card}>
          
          <Image source={imageIndex?.free} style={styles.icon} />
          <Text style={styles.planTitle}>$24.99/month{'\n'}or $199/year</Text>
          <Text style={styles.description}>
            Unlimited uploads/platforms, all features, hardcover memory book, secure vault
          </Text>
          <TouchableOpacity style={styles.button}>
          <CustomButton title={"Upgrade Now"} />

          </TouchableOpacity>
       
        </View>
      </LinearGradient>
    </ScrollView>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
     marginHorizontal:15 ,
     marginTop:15
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },
  cardWrapper: {
    borderRadius: 20,
    marginBottom: 20,
    padding: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
  
    // iOS Shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  
    // Android Shadow
    elevation: Platform.OS === 'android' ? 4 : 0, // iOS ignores `elevation`
  },
  planTag: {
    backgroundColor: '#8C52FF',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 12,
  },
  planTagText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 17,
    fontWeight: '700',
     marginBottom: 8,
     color:"black"
  },
  description: {
    fontSize: 15,
    color: '#000000',
     marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SubscriptionPlan;
