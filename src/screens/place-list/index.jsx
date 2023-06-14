import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { PlaceItem } from '../../components';
import { getPlaces } from '../../store/place.slice';

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.place.places);

  console.warn('places', places);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  const onHandlerSelect = (id, title) => {
    navigation.navigate('PlaceDetail', { placeId: id, title });
  };

  const renderItem = ({ item }) => <PlaceItem {...item} onSelect={onHandlerSelect} />;

  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
