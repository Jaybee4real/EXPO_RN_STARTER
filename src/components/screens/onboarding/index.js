import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper-hooks';
import {RFValue} from 'react-native-responsive-fontsize';
import style from './style';
import slider1 from '../../../assets/images/onboard/male.jpg';
import slider2 from '../../../assets/images/onboard/female.jpg';

const OnboardUser = (props) => {
  return (
    <SafeAreaView>
      <Swiper style={style.container} initIndex={0} loop={false} autoplay>
        <View style={style.view} level={0}>
          <ImageBackground
            source={slider2}
            resizeMode="cover"
            style={style.img}>
            <Text
              style={[
                style.title,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  fontSize: RFValue(35),
                  marginTop: RFValue(35),
                  flexWrap: 'wrap',
                  marginHorizontal: 15,
                },
              ]}>
              Exchange Cash Easily
            </Text>
          </ImageBackground>
        </View>
        <View style={style.view} level={0}>
          <ImageBackground
            source={slider1}
            resizeMode="cover"
            style={style.img}>
            <Text
              style={[
                style.title,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  fontSize: RFValue(35),
                  marginTop: RFValue(35),
                  flexWrap: 'wrap',
                  marginHorizontal: 15,
                },
              ]}>
              Exchange Cash Easily
            </Text>
          </ImageBackground>
        </View>
        <View style={style.view} level={0}>
          <ImageBackground
            source={slider1}
            resizeMode="cover"
            style={style.img}>
            <View style={style.overlay}>
              <View style={style.top}>
                <Image
                  source={require('../../../assets/images/logowhite.png')}
                  style={style.logo}
                />
              </View>
              <View style={style.bottom}>
                <Text style={style.title}>New Users:</Text>
                <Text style={style.writeup}>
                  By Continuing and signing up for an account, You you agree to
                  Cash Exchange User Agreement, and Acknowledge that you have
                  read our Privacy Notice.
                </Text>
                <View style={style.hr} />
                <View style={style.buttonContainer}>
                  <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.8}
                    onPress={() => props.navigation.navigate('Register')}>
                    <Text style={style.introText}>
                      Register with your Email
                    </Text>
                  </TouchableOpacity>
                  <View style={style.verticleLine} />
                  <Image
                    source={require('../../../assets/images/group/icon.png')}
                    style={style.icon}
                  />
                </View>
                <TouchableOpacity
                  style={style.trasparentButton}
                  activeOpacity={0.8}
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text style={style.introText}>Login into your account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default OnboardUser;
