import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import localizationStrings from '../Localization/Localization';
import { useTheme } from '../theme/ThemeProvider';

interface EmptyListComponentProps {
    message?: string;
}

const EmptyListComponent: React.FC<EmptyListComponentProps> = ({ message =localizationStrings?.noData}) => {
    const { theme }:any = useTheme();

    return (
        <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText,{
                color:theme.text
            }]}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    emptyText: {
        fontSize: 15,
        color: 'black',
        fontWeight:"500",
        textAlign:"center"
        
    },
});

export default EmptyListComponent;
