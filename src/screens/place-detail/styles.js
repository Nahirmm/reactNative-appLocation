import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  location: {
    margin: 20,
    width: '90%',
    maxWidth: 350,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.text,
    textAlign: 'center',
  },
  map: {
    height: 300,
  },
});
