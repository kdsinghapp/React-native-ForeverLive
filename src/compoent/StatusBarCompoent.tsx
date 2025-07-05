import React from 'react';
import { StatusBar, SafeAreaView, View, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

type StatusBarComponentProps = {
  barStyle?: 'default' | 'light-content' | 'dark-content';
  backgroundColor?: string;
  translucent?: boolean;
};

const StatusBarComponent: React.FC<StatusBarComponentProps> = ({
  barStyle,
  backgroundColor,
  translucent = false,
}) => {
  const { theme }: any = useTheme();

  const resolvedBarStyle =
    barStyle || (theme.mode === 'dark' ? 'light-content' : 'dark-content');

  const resolvedBackgroundColor = backgroundColor || theme.statusBar;

  return (
    <>
      <StatusBar
        barStyle={resolvedBarStyle}
        backgroundColor={resolvedBackgroundColor}
        translucent={translucent}
      />
      {Platform.OS === 'android' && !translucent && (
        <SafeAreaView style={{ backgroundColor: resolvedBackgroundColor }} />
      )}
    </>
  );
};

export default StatusBarComponent;
