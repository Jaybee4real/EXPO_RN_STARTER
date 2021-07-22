import React, {Component, useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TextInput,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Appbar, Text, Avatar} from 'react-native-paper';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {colors} from '../../styles';
import avatar from '../../../assets/images/avatar.png';
import {CashContainer} from '../../custom';

const {width} = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
const Mapview = (props) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [isLoading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const bottomSheet = useRef();
  const {userData} = useSelector((state) => ({user: state.User}));

  let user = {};
  if (userData !== undefined) {
    user = userData.user;
  }


  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      getCurrentLocation();
    }
  }, []);

  const onRegionChangeComplete = (region) => {
    const Newregion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    setRegion(Newregion);
  };

  // const findCoordinates = () => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const {
  //         coords: {longitude, latitude},
  //       } = position;
  //       const Newregion = {
  //         latitude,
  //         longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       };
  //       setRegion(Newregion);
  //       setLoading(false);
  //     },
  //     (error) => console.tron('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  //   Geolocation.watchPosition((position) => {
  //     const {
  //       coords: {longitude, latitude},
  //     } = position;
  //     const Newregion = {
  //       latitude,
  //       longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     };
  //     setRegion(Newregion);
  //   });
  // };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'CashX needs access to your location',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {
          coords: {longitude, latitude},
        } = position;
        const Newregion = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setRegion(Newregion);
        setLoading(false);
      },
      (error) => {
  //      console.tron('error', error.message);
      },
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000},
    );
  };

  const Header = () => (
    <Appbar.Header style={{backgroundColor: colors.white}}>
      <Appbar.Action
        icon="menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Appbar.Content title="" />
      <Appbar.Action icon="bell-outline" />
    </Appbar.Header>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            size="large"
            style={styles.indicator}
            color={colors.primary}
          />
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          {Header()}
          <View style={styles.top}>
            <Image source={avatar} style={styles.avatar} />
            <View>
              <Text style={styles.title}>
                {user.first_name} {user.last_name}
              </Text>
              <Text style={styles.comment}>Welcome back to Cash Exchange</Text>
            </View>
          </View>
          <View style={styles.wallletContainer}>
            <View>
              <Text style={styles.comment}>Wallet Balance</Text>
              <Text style={styles.title}>$0</Text>
            </View>
            <TouchableOpacity style={styles.submitButton} activeOpacity={0.7}>
              <Text style={styles.buttonText}>Fund Wallet</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BvnContainer}>
            <View>
              {user.photo ? (
                <Image source={{uri: user.photo}} style={styles.pdlock} />
              ) : (
                <Image
                  source={require('../../../assets/images/exc.png')}
                  style={styles.pdlock}
                />
              )}
            </View>
            <View>
              <Text style={[styles.title2, {fontSize: RFValue(16)}]}>
                Enter your BVN to unlock transfers
              </Text>
              <Text style={styles.comment}>
                This will enable you to make transfers on Cash X.
              </Text>
            </View>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            style={{flex: 1}}
            onRegionChange={onRegionChangeComplete}
            showsUserLocation
          />

          <View>
            <BottomSheet
              hasDraggableIcon
              ref={bottomSheet}
              height={RFValue(600)}
              sheetBackgroundColor={colors.primary}>
              <View style={{margin: 20}}>
                <View style={[styles.row]}>
                  <Avatar.Image
                    size={60}
                    source={require('../../../assets/images/money.jpeg')}
                    style={styles.moneyAvatar}
                  />
                  <View style={{marginTop: 15}}>
                    <Text
                      style={[
                        styles.title2,
                        {color: colors.white, fontSize: RFValue(16)},
                      ]}>
                      {' '}
                      Make a cash request
                    </Text>
                    <Text
                      style={[
                        styles.comment,
                        {color: colors.white, fontSize: RFValue(14)},
                      ]}>
                      We would find someone near you.
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 25, marginLeft: 10}}>
                  <Text
                    style={[
                      styles.title2,
                      {color: colors.white, fontSize: RFValue(18)},
                    ]}>
                    {' '}
                    How much cash do You need?
                  </Text>
                </View>
                <View style={[{marginTop: 30, marginLeft: 10}, styles.row]}>
                  <Text
                    style={[
                      styles.comment,
                      {color: colors.white, fontSize: RFValue(12)},
                    ]}>
                    Max amount:
                  </Text>
                  <Text
                    style={[
                      styles.title2,
                      // eslint-disable-next-line react-native/no-inline-styles
                      {
                        color: colors.white,
                        fontSize: RFValue(14),
                        marginBottom: 20,
                        marginLeft: 10,
                      },
                    ]}>
                    $200
                  </Text>
                </View>
                <View style={[{marginTop: 30, marginLeft: 10}, styles.row]}>
                  <TextInput
                    style={[styles.inputText, {width: '70%'}]}
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    placeholder="Enter Amount"
                  />
                  <Text style={[styles.text, {width: '30%'}]}>
                    | Fee: #200{' '}
                  </Text>
                </View>
                <View style={styles.bottomContainer}>
                  <View style={{width: '70%', marginBottom: RFValue(10)}}>
                    <Text style={[styles.comment, {color: colors.white}]}>
                      We will find and match you with agents within one KM to
                      your location.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.request}
                    activeOpacity={0.7}
                    // disabled={isSent}
                    // onPress={() => submit()}
                  >
                    <Text style={styles.buttonText}>Request</Text>
                    <Icon name="caret-right" style={styles.miniIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheet>
            <CashContainer
              background={colors.primary}
              textColor={colors.white}
              titleColor={colors.white}
              icon={require('../../../assets/images/money.jpeg')}
              title="Make a cash request"
              subTitle="We would find someone near you."
              bottom={-15}
              sheet={bottomSheet}
            />
            <CashContainer
              background={colors.white}
              textColor={colors.minBlack}
              titleColor={colors.fullBlack}
              icon={require('../../../assets/images/money.jpeg')}
              title="Give Cash out"
              subTitle="We would find someone near you."
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Mapview;
