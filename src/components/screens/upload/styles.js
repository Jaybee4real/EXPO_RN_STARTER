import {StyleSheet, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: RFValue(10),
    alignItems: 'center',
  },
  title: {
    color: colors.fullBlack,
    fontSize: RFValue(Fonts.fontSize.titleText),
    fontFamily: Fonts.fontFamily.medium,
    marginBottom: RFValue(20),
  },
  comment: {
    fontSize: RFValue(Fonts.fontSize.titleText),
    color: colors.comment,
    fontFamily: Fonts.fontFamily.regular,
    marginVertical: RFValue(10),
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    height: RFValue(30),
    width: RFValue(30),
    alignSelf: 'center',
  },
  background: {
    backgroundColor: colors.input,
  },
  border: {
    borderColor: colors.textinputborder,
  },
  submitButton: {
    width: '30%',
    right: RFValue(10),
    height: RFValue(40),
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(15),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: RFValue(30),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: RFValue(12),
    fontFamily: Fonts.fontFamily.medium,
  },
  thumb: {
    color: colors.minBlack,
    height: RFValue(30),
    width: RFValue(30),
    marginLeft: RFValue(10),
    marginTop: RFValue(15),
  },
  miniIcon: {
    color: colors.white,
    height: RFValue(30),
    width: RFValue(30),
    marginTop: RFValue(20),
    marginLeft: RFValue(10),
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 10,
    flexDirection: 'row',
  },
  hr: {
    borderBottomColor: colors.dividerBorder,
    borderBottomWidth: RFValue(2),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    width: 200,
  },
  pic: {
    height: 150,
    width: 150,
    borderColor: colors.dividerBorder,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 75,
  },
  pixContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  editProfile: {
    marginTop: 110,
    marginLeft: -40,
    backgroundColor: colors.white,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 5,
  },
});
