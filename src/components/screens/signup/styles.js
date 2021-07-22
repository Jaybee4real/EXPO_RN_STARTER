import {StyleSheet, Platform} from 'react-native';
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
  submitButton: {
    width: '40%',
    right: RFValue(10),
    backgroundColor: colors.fullBlack,
    height: RFValue(45),
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
    marginLeft: 10,
  },
  miniIcon: {
    color: colors.white,
    height: 50,
    width: 50,
    marginLeft: RFValue(10),
    textAlignVertical: 'center',
    marginTop: Platform.OS === 'ios' ? RFValue(30) : 0,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'flex-end',
  },
});
