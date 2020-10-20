import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// component
import API from '../components/api';
import Profile from '../components/profil';
// assets
import Pencil from '../assets/pencilOutline.png';
import avatar from '../assets/plainAvatar.png';

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : '#fff';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: colorSelected}}
      />
    </View>
  );
};

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#eb00db',
        inactiveBackgroundColor: '#363636',
      }}>
      <Bottom.Screen
        name="API"
        component={API}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={Pencil} />,
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={avatar} />,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTab;
