import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo} from './src/AddTodo';
import { Navbar} from './src/Navbar';
import { Todo} from './src/Todo';



export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title: title
     }
    ])
   } 


  return (
    <View >
      <Navbar/>
      <View style={styles.container}>
      <AddTodo onSubmit={addTodo}/>
      <View>
        { todos.map(todo => (
           <Todo todo={todo}  key={todo.id}/>
        )) }
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     paddingHorizontal: 30,
     paddingVertical: 20
   }
});
