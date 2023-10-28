import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const [seleksi, setSeleksi] = useState();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity 
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 1 ? 2 : 0,
          borderColor: seleksi == 1 ? '#00b1fe' : 'transparent',
        }}
        onPress={() => setSeleksi(1)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#00b1fe',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 1 ? '#00b1fe' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Nasi Goreng</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 2 ? 2 : 0,
          borderColor: seleksi == 2 ? '#00b1fe' : 'transparent',
        }}
        onPress={() => setSeleksi(2)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#00b1fe',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 2 ? '#00b1fe' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Nasi Goreng + Es Teh</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          backgroundColor: '#FFFFFF',
          elevation: 3,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 6,
          flexDirection: 'row',
          borderWidth: seleksi == 3 ? 2 : 0,
          borderColor: seleksi == 3 ? '#00b1fe' : 'transparent',
        }}
        onPress={() => setSeleksi(3)}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 3,
            borderColor: '#00b1fe',
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: seleksi == 3 ? '#00b1fe' : '#FFFFFF',
              width: 10,
              height: 10,
              borderRadius: 10 / 2,
            }}></View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Nasi Goreng + Es Jeruk</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;