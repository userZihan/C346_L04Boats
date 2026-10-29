import React from 'react';
import {Text, View, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const Boat = ({name, desc, images}) => {
    return (
        <View>
            <Text></Text>
            <Text>
                <FontAwesome6 name="ship" size={30} color="grey" />
                <Text style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: '#666666',
                    textTransform: 'uppercase',
                    letterSpacing: -3
                }}>
                    {name}
                </Text>
            </Text>
            <Text>{desc}</Text>
            <Image source={images} style={{width:400, height:300}} />

        </View>
    )
}

export default Boat;