import { StyleSheet, View } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoFlatList from "../components/TodoFlatList";
import { useState } from "react";
import TodoData from "../types/TodoItem";
import { getId } from "../utils/UniquesId";

const TodoScreen = () =>{

    const [todos, setTodos] = useState<TodoData[]>([]);
    const [editing, setEditing] = useState<TodoData | null>(null);

    const addTodo = (text:string)=>{
        console.log(text);
        const newTodo: TodoData = {
            id: getId(),
            text:text
        }
        console.log(newTodo);
        setTodos(prev=>[...prev,newTodo])
    }

    const updateTodo = (text: string) => {

       const result = todos.map(item => {
            if (item.id === editing?.id) {
                return {...item,text}
            }else{
                return item;
            }
        });

        setTodos(result)
        setEditing(null)
    }

    const deleteTodo = (id:string)=>{
       const newTodos = todos.filter(item=> item.id !== id)
       setTodos(newTodos)
       setEditing(null)
    }
    return(
        <View style={styles.container}>
            <TodoFlatList todoList={todos} onUpdate={setEditing} onDelete={deleteTodo}/>
            <TodoInput addTodo={addTodo} updateTodo={updateTodo} editingTodo={editing}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default TodoScreen;