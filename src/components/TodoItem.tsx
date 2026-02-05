import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoData from "../types/TodoItem";

type Props = {
    todo: TodoData;
    onDelete: (id: string) => void;
    onUpdate: (editing: TodoData) => void;
}
const TodoItem = ({todo,onDelete,onUpdate}:Props) => {
    return (
        <View style={styles.container}>
            <Text>{todo.text}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>onUpdate(todo)} style={styles.updateButton}>
                    <Text style={styles.textButton}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onDelete(todo.id)} style={styles.deleteButton}>
                    <Text style={styles.textButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:'#d6e2d6',
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:6,
        elevation:1,
    },
    buttonContainer:{
        marginTop:8,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    updateButton:{
        backgroundColor:'#0044ee',
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
    },
    deleteButton:{
        marginStart:12,
        backgroundColor:'#ba1f11',
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
    },
    textButton:{
        color:'#ffffff'
    }
});

export default TodoItem;