import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/components/Home';
import Menu from './src/components/Menu';
import Profile from './src/components/Profile';
import Kode from './src/components/Kode';



const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const Tab = createBottomTabNavigator();

  return (
    
    <View style={{flex: 1,  backgroundColor: '#FAFAFA'}}>
      <StatusBar backgroundColor={'#FAFAFA'} barStyle="dark-content" />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: '#bdbdbd',
        }}>
        <TouchableOpacity
        onPress={() => setActiveMenu('Home')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#BC8F8F' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,}}>
          <Icon name="home" size={22} color="#800080" />
          <Text style={{color: '#000000'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setActiveMenu('Menu')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 9,
            backgroundColor: activeMenu == 'Menu' ? '#BC8F8F' : '#FFFFFF',
            elevation: activeMenu == 'Menu' ? 2 : 0,}}>
          <Icon name="boxes" size={22} color='#800080'></Icon>
          <Text style={{color: activeMenu == 'Menu' ? '#000000' : '#000000'}}>
            Menu 
          </Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <TouchableOpacity
          onPress={() => setActiveMenu('Kode')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#BC8F8F',
              position: 'absolute',
              zIndex: 1,
              bottom: 10,
              elevation: 3,
              borderWidth: 3,
              borderColor: '#FFFFFF',
            }}>
            <Icon name="qrcode" size={22} color="#800080" />
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity
        onPress={() => setActiveMenu('Profile')}
          style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#BC8F8F' : '#FFFFFF',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
            }}>
          <Icon name="user" size={22} color="#800080" />
          <Text style={{color: activeMenu == 'Profile' ? '#000000' : ''}}>
            Profile 
          </Text>
        </TouchableOpacity>

      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Menu' && <Menu />}
      {activeMenu == 'Profile' && <Profile/>}
      {activeMenu == 'Kode' && <Kode/>}

    </View>
  );
};

export default App;