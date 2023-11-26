import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Home from './src/components/Home';
import Menu from './src/components/Menu';
import Bayar from './src/components/Bayar';
const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#bdbdbd',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          elevation: 2,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Home')}>
          <Text style={{color: activeMenu == 'Home' ? '#FFFFFF' : '#9ea3b0'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Menu' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Menu' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Menu')}>
          <Text style={{color: activeMenu == 'Menu' ? '#FFFFFF' : '#9ea3b0'}}>
            Menu 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Bayar' ? '#1d5eff' : '#FFFFFF',
            elevation: activeMenu == 'Bayar' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Bayar')}>
          <Text
            style={{color: activeMenu == 'Bayar' ? '#FFFFFF' : '#9ea3b0'}}>
            Bayar
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Menu' && <Menu />}
      {activeMenu == 'Bayar' && <Bayar />}
    </View>
  );
};

export default App;