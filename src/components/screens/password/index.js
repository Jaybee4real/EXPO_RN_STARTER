import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import {Text, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMd from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';

import styles from './styles';

const CreatePassword = ({route, navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [password, setPassword] = useState('');
  const [password2, setconfirm] = useState('');
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const next = () => {
    try {
      if (password !== '' && password2 !== '') {
        if (password !== password2) {
          return Snackbar.show({
            text: 'Please ensure your password',
            duration: Snackbar.LENGTH_LONG,
          });
        }
        const {surname, firstname, address, temp_token} = route.params;
        navigation.navigate('Upload', {
          password,
          surname,
          firstname,
          address,
          temp_token,
        });
      } else {
        Snackbar.show({
          text: 'Please enter your password',
          duration: Snackbar.LENGTH_LONG,
        });
      }
    } catch (error) {
      Snackbar.show({
        text: `${error}`,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Create your personal password</Text>
        <Text style={styles.comment}>Kindly Create a password</Text>
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Create Password"
        />
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setconfirm(text)}
          value={password2}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Confirm Password"
        />
        <View style={styles.switchContainer}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text style={styles.switchText}>Toggle on biometrics sign in</Text>
          <IconMd name="finger-print" style={styles.thumb} />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={() => next()}>
            <Text style={styles.buttonText}>Submit</Text>
            <Icon name="caret-right" style={styles.miniIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;
