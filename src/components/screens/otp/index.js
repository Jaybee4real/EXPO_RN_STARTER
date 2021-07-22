import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, TouchableOpacity, Modal, Image} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import Config from 'react-native-config';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {GenericStyles} from '../../styles/GenericStyles';
import {
  CustomScreenContainer,
  CustomText,
  CustomTextInput,
  CustomButton,
  ErrorBoundary,
} from '../../custom';

import {isAndroid} from '../../../utilities/helperFunctions';
import TimerText from './TimerText';
import styles from './styles';
import style from '../onboarding/style';

const RESEND_OTP_TIME_LIMIT = 60; // 30 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

const OtpVerification = function ({route, navigation}) {
  const [attemptsRemaining, setAttemptsRemaining] = useState(5);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isset, setLastIndex] = useState(false);
  const [isSucess, setSuccess] = useState(false);

  // in secs, if value is greater than 0 then button will be disabled
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  // 0 < autoSubmitOtpTime < 4 to show auto submitting OTP text
  const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
    AUTO_SUBMIT_OTP_TIME_LIMIT,
  );

  // TextInput refs to focus programmatically while entering OTP
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);

  // a reference to autoSubmitOtpTimerIntervalCallback to always get updated value of autoSubmitOtpTime
  const autoSubmitOtpTimerIntervalCallbackReference = useRef();

  useEffect(() => {
    // autoSubmitOtpTime value will be set after otp is detected,
    // in that case we have to start auto submit timer
    autoSubmitOtpTimerIntervalCallbackReference.current = autoSubmitOtpTimerIntervalCallback;
  });

  useEffect(() => {
    if (isset) {
      onSubmitButtonPress();
    }
  }, [isset, onSubmitButtonPress]);

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  // this callback is being invoked from startAutoSubmitOtpTimer which itself is being invoked from useEffect
  // since useEffect use closure to cache variables data, we will not be able to get updated autoSubmitOtpTime value
  // as a solution we are using useRef by keeping its value always updated inside useEffect(componentDidUpdate)
  const autoSubmitOtpTimerIntervalCallback = () => {
    if (autoSubmitOtpTime <= 0) {
      clearInterval(autoSubmitOtpTimerInterval);

      // submit OTP
      onSubmitButtonPress();
    }
    setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
  };

  const startAutoSubmitOtpTimer = () => {
    if (autoSubmitOtpTimerInterval) {
      clearInterval(autoSubmitOtpTimerInterval);
    }
    autoSubmitOtpTimerInterval = setInterval(() => {
      autoSubmitOtpTimerIntervalCallbackReference.current();
    }, 1000);
  };

  const refCallback = (textInputRef) => (node) => {
    textInputRef.current = node;
  };

  const onResendOtpButtonPress = () => {
    // clear last OTP
    if (firstTextInputRef) {
      setOtpArray(['', '', '', '', '']);
      firstTextInputRef.current.focus();
    }

    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSubmitButtonPress = async () => {
     const {phone, email} = route.params;
     const otp = otpArray.toString();
    setSubmittingOtp(true);
    try {
      const url = `${Config.BASE_URL}/api/v1/sign_up/verify_otp`;
      const data = {
        email,
        otp: otp.replace(/,/g,""),
        phone_number: phone,
      };
      const {data: response} = await axios.post(url, data);
      setSuccess(true);
      navigation.navigate('CreateProfile', {temp_token: response.temp_token});
      setSuccess(false);
    } catch (error) {
      setSubmittingOtp(false);
      setErrorMessage(error);
      Snackbar.show({
        text: `${error}`,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  setLastIndex(false);
  };

  // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
  // using onOtpKeyPress for this purpose
  const onOtpChange = (index) => {
    return (value) => {
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fifthTextInputRef.current.focus();
        } else if (index === 4) {
          //set state here
         // onSubmitButtonPress();
          setLastIndex(true);
        }
      }
    };
  };

  const hideModal = () => {
    setSuccess(false);
   // navigation.navigate('CreatePassword');
  };

  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
  const onOtpKeyPress = (index) => {
    return ({nativeEvent: {key: value}}) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fifthTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
    <CustomScreenContainer>
      <SafeAreaView style={styles.container}>
        <ErrorBoundary screenName={'OtpVerification'}>
          <View style={styles.container}>
            <Text style={styles.title}>Verify your mobile number</Text>
            <Text style={styles.comment}>
              OTP has been sent to phone number. Kindly enter OTP sent to your
              line
            </Text>
            <View style={[GenericStyles.row, GenericStyles.mt12]}>
              {[
                firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
                fifthTextInputRef,
              ].map((textInputRef, index) => (
                <CustomTextInput
                  containerStyle={[GenericStyles.fill, GenericStyles.mr12]}
                  value={otpArray[index]}
                  onKeyPress={onOtpKeyPress(index)}
                  onChangeText={onOtpChange(index)}
                  maxLength={1}
                  style={[styles.otpText, GenericStyles.centerAlignedText]}
                  autoFocus={index === 0 ? true : undefined}
                  refCallback={refCallback(textInputRef)}
                  key={index}
                />
              ))}
            </View>
            {errorMessage ? (
              <CustomText
                style={[
                  GenericStyles.negativeText,
                  GenericStyles.mt12,
                  GenericStyles.centerAlignedText,
                ]}>
                {errorMessage}
              </CustomText>
            ) : null}
            {resendButtonDisabledTime > 0 ? (
              <TimerText
                text={'Resend OTP in'}
                time={resendButtonDisabledTime}
              />
            ) : (
              <CustomButton
                type={'link'}
                text={
                  !submittingOtp ? 'Didn’t get a code? Resend in 00:30' : ''
                }
                buttonStyle={styles.otpResendButton}
                textStyle={styles.otpResendButtonText}
                onPress={onResendOtpButtonPress}
              />
            )}
            <View style={GenericStyles.fill} />
            {submittingOtp && (
              <ActivityIndicator color="#059EE2" size="large" />
            )}
            {autoSubmitOtpTime > 0 &&
            autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT ? (
              <TimerText text={'Submitting OTP in'} time={autoSubmitOtpTime} />
            ) : null}
            {!submittingOtp && (
              <CustomText
                style={[GenericStyles.centerAlignedText, GenericStyles.mt12]}>
                {attemptsRemaining || 0} Attempts remaining
              </CustomText>
            )}
          </View>
        </ErrorBoundary>
        <Modal animationType="fade" visible={isSucess} transparent>
          <TouchableOpacity
            style={styles.Overlay}
            activeOpacity={1}
            onPress={() => hideModal()}
            >
            <View style={styles.ModalContentWrapper}>
              <Image
                source={require('../../../assets/images/good.png')}
                style={styles.img}
              />
              <Text style={styles.LoaderMessage}>
                OTP Validation Successfully
              </Text>
              <View style={styles.hr} />
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </CustomScreenContainer>
  );
};

export default OtpVerification;
