import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Config from 'react-native-config';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

import styles from './styles';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setLoading] = useState(false);

  const submit = async () => {
    try {
      const url = `${Config.BASE_URL}/api/v1/sign_up/via_phone`;
      if (email !== '' || phone !== '') {
        setLoading(true);
        const data = {
          email,
          phone_number: `0${phone}`,
          referral_code: code,
        };
        await axios.post(url, data);
        setLoading(false);
        props.navigation.navigate('Otp', {email, phone: `0${phone}`});
      } else {
        Snackbar.show({
          text: 'Please enter your email address and Phone number',
          duration: Snackbar.LENGTH_LONG,
        });
      }
    } catch (error) {
      setLoading(false);
      Snackbar.show({
        text: `${error}`,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Enter your mobile number and Email Address
        </Text>
        <Text style={styles.comment}>
          {' '}
          A confirmation code would be sent to phone number and email address{' '}
        </Text>
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          placeholder="Email Address"
        />
        <View style={[styles.row, {justifyContent: 'space-around'}]}>
          <View style={[styles.row, styles.background, styles.group]}>
            <Image
              source={require('../../../assets/images/nigeria.png')}
              style={styles.icon}
            />
            <Text style={styles.alignText}>+234</Text>
          </View>
          <TextInput
            style={[styles.inputText, styles.background, {width: '73%'}]}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            placeholder="Phone"
          />
        </View>
        <View style={styles.option}>
          <Text>Optional</Text>
        </View>
        <TextInput
          style={[styles.inputText, styles.border]}
          onChangeText={(text) => setCode(text)}
          value={code}
          autoCapitalize="none"
          placeholder="Referral Code"
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
                style={{marginLeft: 15}}
              />
            )}
            <Text style={styles.buttonText}>Save Details</Text>
            <Icon name="caret-right" style={styles.miniIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
