import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    height: RFValue(100),
  },

  title: {
    fontWeight: 'bold',
    color: colors.fullBlack,
    fontSize: RFValue(12),
    fontFamily: Fonts.fontFamily.medium,
  },
  comment: {
    fontSize: RFValue(Fonts.fontSize.titleText),
    color: colors.comment,
    fontFamily: Fonts.fontFamily.regular,
  },

  avatar: {
    borderRadius: 33,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: colors.primaryDark,
    marginHorizontal: 10,
  },
  icon: {
    color: colors.fullBlack,
    marginTop: 15,
  },
});
