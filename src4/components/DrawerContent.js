import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const DrawerContent = (props) => {
  const logOut = () => {
    AsyncStorage.clear().then(() => props.navigation.navigate('Login'));
  };
  return (
    <View style={styles.screen}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 24,
          backgroundColor: '#080f2d',
        }}>
        <Image source={require('../assets/img/profile.png')} />
        <Text style={styles.loginTitle}>Muhammad Rizqi</Text>
        <Text style={styles.text}>@muhammad-rizqi</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home', {screen: 'Home'})}
          style={styles.drawerList}>
          <Image
            source={require('../assets/icon/home-button.png')}
            style={styles.drawerListIcon}
          />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Todo1')}
          style={styles.drawerList}>
          <Image
            source={require('../assets/icon/check-box.png')}
            style={styles.drawerListIcon}
          />
          <Text style={styles.text}>Fast Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Todo2')}
          style={styles.drawerList}>
          <Image
            source={require('../assets/icon/underline-button.png')}
            style={styles.drawerListIcon}
          />
          <Text style={styles.text}>Mobile Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Todo3')}
          style={styles.drawerList}>
          <Image
            source={require('../assets/icon/list.png')}
            style={styles.drawerListIcon}
          />
          <Text style={styles.text}>Universal Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={styles.drawerList}>
          <Image
            source={require('../assets/icon/round-account-button-with-user-inside.png')}
            style={styles.drawerListIcon}
          />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.drawerList,
          {position: 'absolute', bottom: 0, right: 0},
        ]}>
        <Image
          source={require('../assets/icon/exit-to-app-button.png')}
          style={styles.drawerListIcon}
        />
        <Text style={styles.text} onPress={() => logOut()}>
          Log Out
        </Text>
      </View>
    </View>
  );
};

export default DrawerContent;
