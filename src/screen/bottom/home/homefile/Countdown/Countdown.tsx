import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
   StyleSheet,
  Platform,
  Image,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import StatusBarComponent from '../../../../../compoent/StatusBarCompoent';
import CustomHeader from '../../../../../compoent/CustomHeader';
import imageIndex from '../../../../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../../../theme/ThemeProvider';
 
const events = [
  {
    id: '1',
    title: "Sam's Graduation",
    date: '2025-07-12',
    totalDays: 45,
    daysLeft: 18,
  },
  {
    id: '2',
    title: 'Grandma’s 90th Birthday',
    date: '2025-07-12',
    totalDays: 25,
    daysLeft: 11,
  },
  {
    id: '3',
    title: 'Family Reunion',
    date: '2025-07-12',
    totalDays: 11,
    daysLeft: 9,
  },
];

export default function CountdownMovements() {
  const { theme }:any = useTheme();

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor:theme.background
    }]}> 
    <StatusBarComponent/> 
    <CustomHeader imageSource={imageIndex.backImg} label='Countdown Movements'/>
   <View style={{
    marginHorizontal:15 ,
    marginTop:20
   }}>
       <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <View style={styles.bulletRow}>
                <View style={styles.bullet} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
            <CircularProgress
                  value={item?.totalDays}
                  radius={27}
                  duration={1000}
                  activeStrokeColor="#3658AE"
                  inActiveStrokeColor="#DCDDF0"
                  inActiveStrokeOpacity={0.5}
                  progressValueFontSize={18}
                  showPercentage={false}
                  progressValue={false}
                  titleColor="#333"
 
                />
  <Text style={{
    color:"#3658AE",
    marginTop:5,fontSize:14
   }}>Days</Text>
</View>

          </View>
        )}
      />


      </View>
      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
    <Image source={imageIndex.add} style={{
      height:55,
      width:55,
      resizeMode:"contain"
    }}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#7B61FF',
    borderRadius: 10,
    padding: 6,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    marginHorizontal:2,
    marginTop:1,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
  

  
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3658AE',
    marginRight: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft:5 ,
    color:"black"
  },
  date: {
    fontSize: 13,
     marginLeft:14 ,
     color: '#9DB2BF', 
     fontWeight:"600"
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
 
  },
});
