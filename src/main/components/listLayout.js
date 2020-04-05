import React from 'react'
import {View,Text} from 'react-native'

function ListLayout(props){

    return(
        <View style={{marginTop:30}}>
            <Text>{props.data.name}</Text>
        </View>
    )
}

export default ListLayout