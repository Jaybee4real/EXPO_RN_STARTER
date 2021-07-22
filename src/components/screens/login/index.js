import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import IconMd from 'react-native-vector-icons/Ionicons';
import Config from 'react-native-config';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';

import styles from './styles';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setSent] = useState(false);

  const submit = async () => {
    try {
      const url = `${Config.BASE_URL}/api/v1/auth/sign_in`
      const user_url = `${Config.BASE_URL}/api/v1/user/profile`;
      if (email !== '' || password !== '') {
        const data = {
          email,
          password,
        };
        setSent(true);
        const {data: response} = await axios.post(url, data);
        if (response.token) {
          const {data: userData} = await axios.get(user_url, {
            headers: {
              Authorization: `Bearer ${response.token}`,
              'Content-Type': 'application/json',
            },
          });
          dispatch({type: 'FETCH_USER', user: userData.data.user});
          props.navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
        }
      } else {
        Snackbar.show({
          text: 'Please enter your email address and Password',
          duration: Snackbar.LENGTH_LONG,
        });
      }
    } catch (error) {
      setSent(false);
      Snackbar.show({
        text: `${error}`,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Login into your account</Text>
        <Text style={styles.comment}>Kind enter your login details</Text>
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          placeholder="Email Address"
        />
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
          placeholder="Password"
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={() => submit()}>
            {isLoading && (
              <ActivityIndicator
                color="#fff"
                size="small"
                style={{marginRight: 5}}
              />
            )}
            <Text style={styles.buttonText}>Login into account </Text>
          </TouchableOpacity>
          <IconMd name="finger-print" size={38} style={styles.thumb} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
