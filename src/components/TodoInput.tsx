import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TodoData from "../types/TodoItem";

type Props = {
    addTodo: (text: string) => void;
    updateTodo: (text: string) => void;
    editingTodo: TodoData | null
}
const TodoInput = ({ addTodo, updateTodo, editingTodo }: Props) => {
    const [input, setInput] = useState('');
    useEffect(() => {
        if (editingTodo) {
            setInput(editingTodo.text);
        }else{
            setInput('')
        }
    }, [editingTodo])
    const handleClick = () => {
        if (!input) return;
        if (editingTodo) {
            updateTodo(input)
        } else {
            addTodo(input);
        }
        setInput('');
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="Type todo..."
                value={input}
                onChangeText={setInput} />
            <TouchableOpacity onPress={handleClick} style={styles.addButton}>
                <Text style={styles.buttonText}>{editingTodo ? 'Update' : 'Add'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    inputText: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 8,

    },
    addButton: {
        padding: 10,
        backgroundColor: '#3baa31',
        marginStart: 12,
        borderRadius: 8,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff'
    }
});

export default TodoInput;