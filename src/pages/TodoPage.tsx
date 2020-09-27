import React from 'react';
import { StyleSheet } from 'react-native';
import Todolist from '../components/Todos/Todolist';
import { todosDB } from '../data/todoDB';
import { View, Text } from 'native-base';

const TodoPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Todolist Sample</Text>
      <Todolist />
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
});
