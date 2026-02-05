import { FlatList, View } from "react-native";
import TodoData from "../types/TodoItem";
import TodoItem from "./TodoItem";

type Props = {
    todoList: TodoData[];
    onUpdate: (todo: TodoData) => void;
    onDelete: (id: string) => void;
}
const TodoFlatList = ({ todoList, onUpdate, onDelete }: Props) => {
    return (
        <FlatList
            data={todoList}
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => {
                return <TodoItem todo={item} onUpdate={onUpdate} onDelete={onDelete} />
            }} />
    );
}

export default TodoFlatList;