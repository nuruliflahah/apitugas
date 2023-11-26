import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  return (
      <View style={{backgroundColor:'#D8BFD8',flex:1,alignItems:'center'}}>
      <Text style={{fontSize: 22,color:'#000000'}}>Kopi Cantik</Text>
      <Text style={{fontSize: 15,color:'#000000'}}>Selamat Datang Di Warung Kopi kami menyediakan berbagai macam rasa yang tidak ada di tempat lain</Text>
    </View>
    
  );
};

export default Home; 