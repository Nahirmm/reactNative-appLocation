import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: colors.text,
  },
  address: {
    fontSize: 14,
    color: colors.text,
    fontWeight: 'bold',
  },
});
