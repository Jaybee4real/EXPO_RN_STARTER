import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {Text} from 'react-native-paper';
import IconMd from 'react-native-vector-icons/FontAwesome5';
import Snackbar from 'react-native-snackbar';
import DatePicker from 'react-native-date-picker';

import styles from './styles';

const Profile = ({route, navigation}) => {
  const [surname, setSurname] = useState('');
  const [firstname, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  // const [date, setDate] = useState(new Date());

  const submit = async () => {
    try {
      const {temp_token} = route.params;
      if (surname !== '' || firstname !== '' || address !== '') {
        const data = {
          surname,
          firstname,
          address,
          temp_token,
        };
        navigation.navigate('CreatePassword', data);
      } else {
        Snackbar.show({
          text: 'Please complete the empty fields',
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
        <Text style={styles.title}>We are excited to Meet you.</Text>
        <Text style={styles.comment}>
          Kindly fill in details to assist us in creating a profile for you.
        </Text>
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setSurname(text)}
          value={surname}
          autoCapitalize="none"
          placeholder="Surname"
        />
        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setFirstName(text)}
          value={firstname}
          autoCapitalize="none"
          placeholder="First Name"
        />

        <TextInput
          style={styles.inputContainerStyle}
          onChangeText={(text) => setAddress(text)}
          value={address}
          autoCapitalize="none"
          placeholder="Address"
        />
        {/* <DatePicker date={date} onDateChange={setDate} /> */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.7}
            onPress={() => submit()}>
            <Text style={styles.buttonText}>Next </Text>
            <IconMd name="caret-right" style={styles.miniIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
