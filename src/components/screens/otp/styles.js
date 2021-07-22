import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  submitButtonText: {
    color: colors.WHITE,
  },
  otpResendButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  otpResendButtonText: {
    color: colors.ORANGE,
    textTransform: 'none',
  },
  otpText: {
    fontWeight: 'bold',
    color: colors.BLUE,
    fontSize: RFValue(18),
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: colors.fullBlack,
    fontSize: RFValue(22),
    fontFamily: Fonts.fontFamily.medium,
    marginBottom: RFValue(20),
    marginTop: RFValue(20),
  },
  comment: {
    fontSize: Fonts.fontSize.titleText,
    color: colors.comment,
    fontFamily: Fonts.fontFamily.regular,
    marginVertical: RFValue(10),
  },
  Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  ModalContentWrapper: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    //height: 120,
    borderWidth: 1,
    borderColor: colors.buttonBg,
    borderStyle: 'solid',
    width: '80%',
    alignItems: 'center'
  },
  LoaderMessage: {
    color: colors.fullBlack,
    marginTop: 20,
    fontSize: 14,
    marginBottom: 30,
  },
  img: {
    marginVertical: 20,
    height: 45,
    width: 45,
    backgroundColor: colors.white,
  },
  hr: {
    borderBottomColor: colors.dividerBorder,
    borderBottomWidth: RFValue(2),
    marginTop: RFValue(20),
    marginBottom: RFValue(40),
    width: '80%',
  },
});
