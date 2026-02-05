import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"

const SearchInputComponent = () => {

    const debounceTimeoutRef = useRef<number | null>(null);
    const [input, setInput] = useState('');


    useEffect(() => {

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
            searchApiCall(input);
        }, 1000);

        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        }
    }, [input]);

    const searchApiCall= (text:string)=>{
        console.log(text)
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={input}
                onChangeText={setInput}
                style={styles.textInput}
                placeholder="Search..." />

                <Text style={{marginTop:20}}>{input}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        padding: 16,
    },
    textInput: {
        //flex: 1,
        borderWidth: 1,
        padding: 8,
        borderRadius: 6,
    }
});

export default SearchInputComponent;