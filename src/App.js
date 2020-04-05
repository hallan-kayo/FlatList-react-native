import React, {Component} from 'react';
import {FlatList, Text, View } from 'react-native';
//importando a classe list layout
import ListLayout from './main/components/listLayout'

class Lista extends Component{

  constructor(props){
    super(props)
    this.state={
      misPeliculas:[
        {name: "el conjuro", key:'0'},
        {name: "el conjuro2", key:'1'},
        {name: "anabelle", key:'2'}
      ]
    }
  }

  //separador dos componentes da lista
  separator = () => {
    return(
      <View style={{
        height:5,
        width: "100%",
        backgroundColor: "black",
        marginVertical:10
      }}>

      </View>
    )
  }

  render(){

    return(
      <FlatList 
        //variável data recebendo o state
        data={this.state.misPeliculas}
        renderItem={({item}) => <ListLayout data={item}/>}
        horizontal = {false}
        //chamando a função separadora
        ItemSeparatorComponent={this.separator}
        //caso a lista estiver vazia, exibe isso
        ListEmptyComponent={
          <Text style={{marginTop:30}}>
            não há elementos na lista
          </Text>}
      ></FlatList>

    )
  }
}

export default Lista