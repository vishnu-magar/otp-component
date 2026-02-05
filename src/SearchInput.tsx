import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SearchInput = () => {


    const [input, setInput] = useState('');
    const debounceTimeOutRef = useRef<number | null>(null);

    useEffect(() => {
        if (debounceTimeOutRef.current) {
            clearTimeout(debounceTimeOutRef.current);
        }

        debounceTimeOutRef.current = setTimeout(() => {
            searchApi(input);
        }, 1000);

        return () => {
            if (debounceTimeOutRef.current) {
                clearTimeout(debounceTimeOutRef.current);
            }
        }
    }, [input]);


    const searchApi = (query: string) => {
        console.log(query);
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={input}
                onChangeText={setInput}
                style={styles.textInput}
                placeholder="Search..."
            />
            <Text style={styles.text}>{input}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        padding: 8,
        borderRadius: 6,
    },
    text: {
        marginTop: 20,
    }
});

export default SearchInput;