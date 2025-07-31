import React from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  Modal, 
  StyleSheet, 
  Platform, 
  Image
} from 'react-native';
import imageIndex from '../../assets/imageIndex';
import localizationStrings from '../../Localization/Localization';

const LoadingModal = ({ visible }:any) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image  source={imageIndex.appLogLogin} style={{
            height:55,
            width:55,
            resizeMode:"contain"
          }}/>
          {/* <ActivityIndicator size="large" color="#150149"  style={{marginTop:10}} /> */}
          <Text style={styles.loadingText}>{localizationStrings?.Please}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',  // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,  // For Android
  },
  loadingText: {
    marginTop: 15,
    fontSize: 15,
    color: '#333',
    fontWeight: '600', 
    bottom:11
  },
});

export default LoadingModal;
// import React from 'react';
// import { 
//   View, 
//   Text, 
//   ActivityIndicator, 
//   Modal, 
//   StyleSheet, 
//   Platform 
// } from 'react-native';

// const LoadingModal = ({ visible }:any) => {
//   return (
//     <Modal
//       transparent={true}
//       animationType="fade"
//       visible={visible}
//     >
//       <View style={styles.overlay}>
//         <View style={styles.modalContainer}>
//           <ActivityIndicator size="large" color="#150149"  style={{marginTop:10}} />
//           <Text style={styles.loadingText}>Please wait...</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.4)',  // Semi-transparent background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     width: 200,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10,  // For Android
//   },
//   loadingText: {
//     marginTop: 15,
//     fontSize: 15,
//     color: '#333',
//     fontWeight: '500',
//   },
// });

// export default LoadingModal;
