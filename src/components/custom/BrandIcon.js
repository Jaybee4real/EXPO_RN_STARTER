import React from 'react';
import {Avatar} from 'react-native-elements';
import {Fonts} from '../../styles';

const BrandIcon = ({name}) => (
  <Avatar
    rounded
    title={''}
    activeOpacity={0.7}
    height={48}
    width={48}
    containerStyle={{marginHorizontal: 8, marginVertical: 8}}
    titleStyle={{fontFamily: Fonts.fontFamily.medium, fontSize: 18}}
  />
);

export default BrandIcon;
