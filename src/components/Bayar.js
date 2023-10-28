import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Bayar = () => {
  return (
    <TouchableOpacity>
    <View style={{marginHorizontal: 13}}>
      <Text style={{fontSize: 22,}}>
      <Icon name="chevron-circle-down" size={20} color="#FFFFFF" />Metode Pembayaran</Text>

    </View>
    </TouchableOpacity>
 
  );
};

export default Bayar;