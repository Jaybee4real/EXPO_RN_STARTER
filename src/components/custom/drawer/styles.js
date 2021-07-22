import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  userInfoSection: {
    margin: 0,
    paddingTop: 80,
    paddingLeft: 20,
    alignItems: 'center',
  },
  title: {
    color: colors.fullBlack,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 30,
  },
  caption: {
    color: colors.primary,
    fontSize: 14,
    lineHeight: 14,
    textDecorationLine: 'underline',
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
