import React from 'react';
import {StyleSheet} from 'react-native';

import {CustomText} from '../../custom';

import {GenericStyles} from '../../styles/GenericStyles';

const TimerText = (props) => {
  const {text, time} = props;

  return (
    <CustomText
      style={[
        GenericStyles.centerAlignedText,
        styles.resendOtpTimerText,
        GenericStyles.mt24,
      ]}>
      {text}
      <CustomText style={[GenericStyles.bold, {color: '#059EE2'}]}>
        {' ' + time}s
      </CustomText>
    </CustomText>
  );
};

const styles = StyleSheet.create({
  resendOtpTimerText: {
    fontSize: 14,
  },
});

export default TimerText;
