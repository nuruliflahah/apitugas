import React, {Component} from 'react';
import {View, Text,TouchableOpacity,FlatList} from 'react-native';

class Kode extends Component {
  constructor(props){
    super(props);
    this.state ={};
    data =[]
  }

  getdata = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.setState({data:json});
      console.log(json);
    })
    .catch(error => {
      console.error(error);
    });

  }

  render(){
    return <View style={{flex :1,justifyContent:"center",alignItems:"center"}}>
      <FlatList
       data={this.state.data}
       renderItem={({item,index}) => (
        <View style={{margin:20}}>
          <Text>title:{item.title}</Text>
          <Text>body:{item.body}</Text>
        </View>
       )}
       keyExtractor={item => item.id}
      />
<TouchableOpacity onPress={() => this.getdata()}>
  <Text>Get data</Text>
</TouchableOpacity>
    </View>;
  }
}
  

export default Kode;