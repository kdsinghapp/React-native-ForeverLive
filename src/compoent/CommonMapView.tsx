import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CommonMapView = ({ latitude = 25.276987, longitude = 55.296249, title = "My Marker", description = "Dubai Location" }) => {
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden', marginTop: 10 }}>
            <MapView
                style={{
                    height: 150,
                    borderRadius: 20,
                }}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={false} // Hide current location
                showsMyLocationButton={false} // Hide location button
            >
                <Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    title={title}
                    description={description}
                />
            </MapView>
        </View>
    );
};

export default CommonMapView;
