import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';


export const AddTodo = ({ onSubmit}) => {
   
    const [value, setValue] = useState('')

   const pressHandler = () => {
       if(value.trim()){
        onSubmit(value)
        setValue('')
       }
       else{
          Alert.alert('Текст не может быть пустым')
       }
    
   } 

    return (
       <View style={styles.block}>
           
           <TextInput style={styles.input}  onChangeText={setValue}
           value={value} placeholder='введите название'/>
           <Button onPress={pressHandler} title='Добавить'/>
       </View>
    )
}

const styles = StyleSheet.create({
    block: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
     
    },
    text:{
     fontSize: 18
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
       
    },
    button: {
       backgroundColor:'darkblue' ,
       
    }

})