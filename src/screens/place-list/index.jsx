import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { PlaceItem } from '../../components';

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

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
