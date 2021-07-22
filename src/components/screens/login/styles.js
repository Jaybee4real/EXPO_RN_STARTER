import {StyleSheet, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: RFValue(10),
  },
  title: {
    fontWeight: 'bold',
    color: colors.fullBlack,
    fontSize: RFValue(22),
    fontFamily: Fonts.fontFamily.medium,
    marginBottom: RFValue(20),
  },
  comment: {
    fontSize: Fonts.fontSize.titleText,
    color: colors.comment,
    fontFamily: Fonts.fontFamily.regular,
    marginVertical: RFValue(10),
  },
  inputContainerStyle: {
    backgroundColor: colors.input,
    borderColor: colors.textinputborder,
    height: RFValue(50),
    padding: RFValue(10),
    borderRadius: RFValue(5),
    marginTop: 20,
  },
  inputText: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    height: RFValue(50),
    padding: RFValue(10),
    marginTop: RFValue(23),
    borderRadius: RFValue(5),
    borderColor: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    height: RFValue(30),
    width: RFValue(30),
    marginRight: RFValue(5),
  },
  background: {
    backgroundColor: colors.input,
  },
  group: {
    width: RFValue(85),
    height: RFValue(50),
    marginTop: RFValue(23),
    lineHeight: RFValue(50),
    paddingHorizontal: RFValue(8),
    alignItems: 'center',
    borderRadius: RFValue(5),
  },
 
  submitButton: {
    width: '55%',
    right: RFValue(10),
    backgroundColor: colors.fullBlack,
    height: RFValue(60),
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(10),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: Fonts.fontFamily.medium,
  },
  bottomContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
   thumb: {
    color: colors.primary,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.primary,
    //marginLeft: RFValue(10),
    marginTop: RFValue(35),
    padding: 10,
    borderRadius: 10,
  },
});
