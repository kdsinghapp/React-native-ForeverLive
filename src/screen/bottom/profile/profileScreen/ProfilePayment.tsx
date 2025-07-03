import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';
import imageIndex from '../../../../assets/imageIndex';
import CustomHeader from '../../../../compoent/CustomHeader';
import localizationStrings from '../../../../Localization/Localization';
  
const ProfilePayment = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);
const navigation = useNavigation()
    const paymentMethods = [
        { id: '1', label: 'PAYPAL', icon: imageIndex.googlePay, img: imageIndex.cirlce },
        { id: '2', label: 'GOOGLE PAY', icon: imageIndex.payPal, img: imageIndex.acticveCircle },
        { id: '3', label: '•••• •••• •••• 8569', icon: imageIndex.paypal2, img: imageIndex.cirlce },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBarComponent />
                 <CustomHeader imageSource={imageIndex.backImg} label={localizationStrings?.payment} />
             <ScrollView style={styles.container}>
                <Text style={styles.subtitle}>{localizationStrings?.select_payment_method_prompt}</Text>
                <View style={{ marginTop: 30 }}>
                    {paymentMethods.map((method:any) => (
                        <TouchableOpacity key={method.id}
                            onPress={() => setSelectedPayment(method?.id)}
                            style={styles.paymentOption}  >
                            <Image source={method.icon} style={styles.icon}
                                resizeMode='contain'
                            />
                            <Text style={styles.paymentText}>{method?.label}</Text>
                            <Text style={{
                                color:"#34C759",
                                fontSize:12,
                                fontWeight:"500"
                            }}>
                            Connected
                            </Text>

                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.addCardButton}>
                    <Text style={styles.addCardText}>{localizationStrings?.add_new_card}</Text>
                </TouchableOpacity>

            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#9DB2BF',
        marginBottom: 20,
        marginTop: 13
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
        elevation: 2, // Android shadow
        shadowColor: '#0000000D', // iOS shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    icon: {
        marginRight: 15,
        height: 44,
        width: 44
    },
    paymentText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    addCardButton: {
        backgroundColor: '#0000001A',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 33,
    },
    addCardText: {
        fontSize: 17,
        fontWeight: '600',
        color: "black"
    },
    continueButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    activeButton: {
        backgroundColor: '#000',
    },
    disabledButton: {
        backgroundColor: '#A0A0A0',
    },
    continueText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfilePayment;
