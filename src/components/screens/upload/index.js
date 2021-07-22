import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMd from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Config from 'react-native-config';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import userAvatar from '../../../assets/images/photo.png';
import colors from '../../styles/colors';

const Upload = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [uploaded, setUpload] = useState(false);
  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {surname, firstname, address, temp_token, password} = route.params;

  const pickSingle = (cropit, circular = false) => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      includeExif: true,
      mediaType: 'photo',
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(async (image) => {
        const base64 = await ImgToBase64.getBase64String(image.path);
        setImage(base64);
        //  setImage(image);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const next = async () => {
    try {
      const url = `${Config.BASE_URL}/api/v1/auth/sign_up/update_user_account`;
      if (image !== '') {
        setLoading(true);
        let data = {
          last_name: surname,
          first_name: firstname,
          address,
          password,
          photo: `data:image/png;base64,${image}`,
        };
        const {data: response} = await axios.put(
          url,
          {...data},
          {
            headers: {
              Authorization: `Bearer ${temp_token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json, text/plain, */*',
            },
          },
        );
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
       
      } else {
        Snackbar.show({
          text: 'Please Upload your picture',
          duration: Snackbar.LENGTH_LONG,
        });
      }
    } catch (error) {
      setLoading(false);
      // console.tron('error', error);
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
          Hi {surname} {firstname}
        </Text>
        <Text style={styles.comment}>Welcome</Text>
        <View style={styles.hr} />
        <Image source={require('../../../assets/images/logo.png')} />
        <Text style={styles.title}>
          Upload a profile Picture of your choice
        </Text>

        <View style={styles.pixContainer}>
          {image === '' ? (
            <Image source={userAvatar} style={styles.pic} />
          ) : (
            <Image
              source={{uri: `data:image/png;base64,${image}`}}
              style={styles.pic}
            />
          )}

          <TouchableOpacity
            style={styles.editProfile}
            activeOpacity={0.8}
            onPress={() => pickSingle(false)}>
            <IconMd name="camera-plus-outline" size={30} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.submitButton, {backgroundColor: colors.white}]}
            activeOpacity={0.7}
            onPress={() => console.log('')}>
            <Text
              style={[
                styles.buttonText,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: uploaded ? colors.fullBlack : '#868686'},
              ]}>
              Skip
            </Text>
            <Icon name="caret-right" style={styles.miniIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.submitButton,
              // eslint-disable-next-line react-native/no-inline-styles
              {backgroundColor: uploaded ? '#EEEEEE' : colors.fullBlack},
            ]}
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={() => next()}>
            {isLoading && (
              <ActivityIndicator
                color="#fff"
                size="small"
                style={{marginLeft: 15}}
              />
            )}
            <Text style={[styles.buttonText, {color: colors.white}]}>
              Submit
            </Text>
            <Icon name="caret-right" style={styles.miniIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Upload;
