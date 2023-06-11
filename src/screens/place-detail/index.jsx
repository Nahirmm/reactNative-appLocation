import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { MapPreview } from '../../components';

const PlaceDetail = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) => state.place.places.find((item) => item.id === placeId));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: place.lat, lng: place.lng }}>
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
