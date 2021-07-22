import {StyleSheet, Dimensions, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  img: {
    height: '100%',
    width,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width,
    height: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    height: RFValue(60),
    width: RFValue(250),
  },
  top: {
    height: RFValue(300),
    marginTop: RFValue(55),
    alignItems: 'center',
    width,
  },
  bottom: {
    width,
    height: RFValue(400),
    paddingHorizontal: RFValue(20),
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: RFValue(16),
    fontFamily: Fonts.fontFamily.medium,
    marginBottom: RFValue(20),
  },
  writeup: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: Fonts.fontFamily.medium,
  },
  hr: {
    borderBottomColor: colors.light,
    borderBottomWidth: RFValue(2),
    marginTop: RFValue(20),
    marginBottom: RFValue(40),
  },
  introText: {
    color: colors.white,
    fontSize: RFValue(16),
    fontFamily: Fonts.fontFamily.medium,
    fontWeight: 'bold',
  },
  button: {
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonBg,
    width: '60%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width,
    height: RFValue(60),
  },

  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  icon: {
    height: '100%',
    borderRadius: 10,
    width: RFValue(60),
  },
  trasparentButton: {
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f833',
    width: '100%',
    alignSelf: 'center',
    marginTop: RFValue(20),
  },
});
