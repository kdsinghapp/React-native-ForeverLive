
import {   StyleSheet } from 'react-native';     
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 381,
        height: 185,
        resizeMode: 'cover',
        marginTop:15
    },
    sectionContainer: {
        padding: 15,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        marginBottom: 10,
        marginTop:15
    },
    sectionText: {
        fontSize: 14,
        color: '#9796A1',
        lineHeight: 22,
    },
    htmlStyles: {
        p: {
            fontSize: 14,
            color: 'black',
            lineHeight: 24,
            fontWeight: "500",
            marginTop: 8,
 
        },
        h1: {
            fontSize: 22,
            fontWeight: '500',
            color: '#000',
            marginBottom: 10,
        },
        h2: {
            fontSize: 18,
            fontWeight: '500',
            color: '#222',
            marginBottom: 8,
        },
        a: {
            color: '#007bff',
            // textDecorationLine: 'underline',
        },
    },
});
export default styles;
