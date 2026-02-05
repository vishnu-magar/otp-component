import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoData from "../types/TodoItem";
import { colors } from "../theme/colors";

type Props = {
    todo: TodoData;
    onDelete: (id: string) => void;
    onUpdate: (editing: TodoData) => void;
}
const TodoItem = ({todo,onDelete,onUpdate}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.todoText}>{todo.text}</Text>
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
        backgroundColor:colors.background,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:8,
        elevation:2,
    },
    buttonContainer:{
        marginTop:8,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    todoText:{
        color:colors.text
    },
    updateButton:{
        backgroundColor:colors.primary,
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
    },
    deleteButton:{
        marginStart:12,
        backgroundColor:colors.secondary,
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
    },
    textButton:{
        color:colors.white,
    }
});

export default TodoItem;