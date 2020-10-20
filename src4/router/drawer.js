import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './bottomTab';

const Drawer = createDrawerNavigator();

const TheDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default TheDrawer;
