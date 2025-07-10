import { Platform, PermissionsAndroid } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const requestCameraPermissions = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES, // Android 13+
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, // Pre-Android 13
      ]);

      return (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
        (
          granted['android.permission.READ_MEDIA_IMAGES'] === PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        )
      );
    } catch (err) {
      console.warn('Android permission error:', err);
      return false;
    }
  } else {
    try {
      const camera = await request(PERMISSIONS.IOS.CAMERA);
      const mic = await request(PERMISSIONS.IOS.MICROPHONE);
      const photo = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

      return (
        camera === RESULTS.GRANTED &&
        mic === RESULTS.GRANTED &&
        photo === RESULTS.GRANTED
      );
    } catch (err) {
      console.warn('iOS permission error:', err);
      return false;
    }
  }
};
