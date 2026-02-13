import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

interface OTPInputProps {
    length: number;
    onComplete: (otp: string) => void;
    onClear?: () => void;
    disabled?: boolean;
}

const OTPInputComponent = ({
    length,
    onComplete,
    onClear,
    disabled = false,
}: OTPInputProps) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<Array<TextInput | null>>([]);

    useEffect(() => {
        if (!disabled) {
            inputsRef.current[0]?.focus();
        }
    }, [disabled]);

    const handleChange = (text: string, index: number) => {
        // Handle paste (multiple digits)
        if (text.length > 1) {
            const digits = text.split("").slice(0, length);
            setOtp(digits);

            // Focus last box
            inputsRef.current[length - 1]?.focus();

            // Callback when completed
            if (digits.length === length) {
                onComplete(digits.join(""));
            }
            return;
        }

        // Handle single digit input
        const updatedOTP = [...otp];
        updatedOTP[index] = text;
        setOtp(updatedOTP);

        // Move to next input
        if (text && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        // All digits filled
        if (updatedOTP.every((d) => d !== "")) {
            onComplete(updatedOTP.join(""));
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === "Backspace") {
            if (otp[index] === "" && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const clearAll = () => {
        setOtp(Array(length).fill(""));
        inputsRef.current[0]?.focus();
        onClear && onClear();
    };

    return (
        <View>
            <View style={styles.container}>
                {Array.from({ length }).map((_, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => {
                            inputsRef.current[index] = ref;
                        }}
                        value={otp[index]}
                        maxLength={1}
                        editable={!disabled}
                        keyboardType="number-pad"
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        style={[
                            styles.box,
                            disabled && { backgroundColor: "#ddd" },
                        ]}
                    />
                ))}
            </View>

            {/* Clear All Button */}
            {!disabled && (
                <TouchableOpacity onPress={clearAll} style={styles.clearBtn}>
                    <Text>Clear</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
    },
    box: {
        width: 45,
        height: 55,
        borderWidth: 1,
        borderColor: "#444",
        textAlign: "center",
        fontSize: 22,
        borderRadius: 8,
    },
    clearBtn: {
        marginTop: 20,
        alignSelf: "center",
        padding: 10,
        backgroundColor: '#2cabd9',
        borderRadius: 8
    },
});

export default OTPInputComponent;
