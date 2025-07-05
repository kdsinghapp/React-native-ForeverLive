import { StyleSheet, Dimensions } from 'react-native';
import font from '../../../theme/font';

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      fontSize: 22,
      marginBottom: 20,
      color: theme.text,
      fontFamily: font.PoppinsSemiBold,
      marginHorizontal: 15,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    iconWrapper: {
      padding: 10,
      borderRadius: 20,
      marginRight: 5,
    },
    label: {
      fontSize: 14,
      color: theme.text,
      fontFamily: font.PoppinsRegular,
    },
  });

export default getStyles;
