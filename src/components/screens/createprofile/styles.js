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
  submitButton: {
    width: '40%',
    right: RFValue(10),
    backgroundColor: colors.fullBlack,
    height: RFValue(40),
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(25),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: Fonts.fontFamily.medium,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'flex-end',
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
  border: {
    borderColor: colors.textinputborder,
  },
  alignText: {
    textAlignVertical: 'top',
    color: colors.text,
  },
  option: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  miniIcon: {
    color: colors.white,
    height: RFValue(30),
    width: RFValue(30),
    marginTop: RFValue(20),
    marginLeft: RFValue(10),
  },
});
