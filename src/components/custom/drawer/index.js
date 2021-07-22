import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const sideMenu = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://res.cloudinary.com/ruksa/image/upload/v1587470607/profile/pic012_kdiyqt.jpg',
            }}
            size={100}
          />
          <Title style={styles.title}>Rukmoni Nagarajan</Title>
          <Caption style={styles.caption}>Edit Profile</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons
            //     name="home-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Transactions and History"
            
            onPress={() => {}}
          />
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons
            //     name="bookmark-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Wallets and Payment"
            onPress={() => {}}
          />
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons
            //     name="cart-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Referals"
            onPress={() => {}}
          />
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons name="tune" color={color} size={size} />
            // )}
            label="Account Privacy / Security"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Account">
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons name="logout" color={color} size={size} />
            // )}
            label="LogOut"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default sideMenu;
