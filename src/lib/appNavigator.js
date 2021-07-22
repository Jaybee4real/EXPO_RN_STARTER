import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import Login from '../components/screens/login';
import Mapview from '../components/screens/mapview';
import Register from '../components/screens/signup';
import Otp from '../components/screens/otp';
import CreatePassword from '../components/screens/password';
import Upload from '../components/screens/upload';
import colors from '../components/styles/colors';
import DrawerContent from '../components/custom/drawer';
import onBoardUser from '../components/screens/onboarding';
import CreateProfile from '../components/screens/createprofile';

// create screen for signup

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//loggedin
export const PrivateNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerStyle: {
          height: 0,
        },
      }}
    />
    <Stack.Screen
      name="Mapview"
      component={Mapview}
      options={{
        headerStyle: {
          height: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name="Mapview" component={Mapview} />
    {/* <Drawer.Screen name="Upload" component={Upload} /> */}
  </Drawer.Navigator>
);

export const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="userBoard">
    <Stack.Screen
      name="Login"
      component={Login}
      options={(props) => ({
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={props.navigation.goBack}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: RFValue(40),
              width: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(40 / 2),
              flexDirection: 'row',
            }}>
            <Icon
              name="caret-left"
              size={RFValue(24)}
              color="#059ee2"
              style={{marginLeft: 20}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        ),
      })}
    />

    <Stack.Screen
      name="userBoard"
      component={onBoardUser}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Register"
      component={Register}
      options={(props) => ({
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={props.navigation.goBack}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: RFValue(40),
              width: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(40 / 2),
              flexDirection: 'row',
            }}>
            <Icon
              name="caret-left"
              size={RFValue(24)}
              color="#059ee2"
              style={{marginLeft: 20}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        ),

        headerTitleContainerStyle: {alignItems: 'center'},
        headerLeftContainerStyle: {marginLeft: 5},
        headerRightContainerStyle: {marginRight: 10},
      })}
    />

    <Stack.Screen
      name="Otp"
      component={Otp}
      options={(props) => ({
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={props.navigation.goBack}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: RFValue(40),
              width: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(40 / 2),
              flexDirection: 'row',
            }}>
            <Icon
              name="caret-left"
              size={RFValue(24)}
              color="#059ee2"
              style={{marginLeft: 20}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        ),

        headerTitleContainerStyle: {alignItems: 'center'},
        headerLeftContainerStyle: {marginLeft: 5},
        headerRightContainerStyle: {marginRight: 10},
      })}
    />
    <Stack.Screen
      name="CreatePassword"
      component={CreatePassword}
      options={(props) => ({
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={props.navigation.goBack}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: RFValue(40),
              width: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(40 / 2),
              flexDirection: 'row',
            }}>
            <Icon
              name="caret-left"
              size={RFValue(24)}
              color="#059ee2"
              style={{marginLeft: 20}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        ),

        headerTitleContainerStyle: {alignItems: 'center'},
        headerLeftContainerStyle: {marginLeft: 5},
        headerRightContainerStyle: {marginRight: 10},
      })}
    />

    <Stack.Screen
      name="Upload"
      component={Upload}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Dashboard"
      component={DrawerNavigator}
      options={(props) => ({
        headerTitle: '',
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="CreateProfile"
      component={CreateProfile}
      options={(props) => ({
        headerTitle: '',
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={props.navigation.goBack}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: RFValue(40),
              width: RFValue(80),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(40 / 2),
              flexDirection: 'row',
            }}>
            <Icon
              name="caret-left"
              size={RFValue(24)}
              color="#059ee2"
              style={{marginLeft: 20}}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        ),

        headerTitleContainerStyle: {alignItems: 'center'},
        headerLeftContainerStyle: {marginLeft: 5},
        headerRightContainerStyle: {marginRight: 10},
      })}
    />
  </Stack.Navigator>
);
