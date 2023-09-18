import React, {useState} from 'react';
import {TextInput, Button, Text, Switch, StyleSheet, View} from 'react-native';

export default function BasicApp(){

    const [value, onChangeText] = useState('Type Here');

    const [color, setColor] = useState('white');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        setColor(!isEnabled ==true ? 'white' : 'black');
    };
    
    return(
        <View style ={[styles.container, 
                    {backgroundColor:color}]}>

            <TextInput style = {styles.textinput}
            onChangeText = {text=>onChangeText(text)}
            value = {value} clearTextonFocus = 'false'
            />
            
            <Text style = {styles.text}> {value} </Text>

            <Button title = 'Clear' onPress={()=>onChangeText('')}/>

            <Switch 
                onValueChange ={toggleSwitch} 
                value={isEnabled}
            />
        </View>
    );
}

    const styles = StyleSheet.create(
        {
            container: {
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                padding:100
            },

            text: {
                color: 'grey',
            },

            textinput: {
                color: 'grey',
                borderColor: 'grey',
                borderWidth: 1,
                width: '100%',
                padding:5,
                margin:10
            },

            bgblack: {
                background: 'black'
            },

            bgwhite: {
                background: 'white'
            }
        }
    );
