import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';

const CashContainer = ({
  background,
  icon,
  title,
  subTitle,
  textColor,
  titleColor,
  bottom,
  position,
  sheet,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      {backgroundColor: background, marginBottom: bottom, zIndex: position},
    ]}
    activeOpacity={0.9}
    onPress={() => (sheet ? sheet.current.show() : console.log(''))}>
    <Avatar.Image size={RFValue(40)} source={icon} style={styles.avatar} />
    <View>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
      <Text style={[styles.comment, {color: textColor}]}>{subTitle}</Text>
    </View>
    <Icon
      size={25}
      name="caret-right"
      style={[styles.icon, {color: titleColor}]}
    />
  </TouchableOpacity>
);
export default CashContainer;
