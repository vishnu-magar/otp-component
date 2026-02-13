import React from "react";
import { View, Text, Alert } from "react-native";
import OTPInputComponent from "./OtpInputComponent";

export default function OtpScreen() {
  const handleOTPComplete = (otp: string) => {
    if (otp === "111111") {
      Alert.alert("Success", "OTP Verified!");
    } else {
      Alert.alert("Invalid OTP", "Please try again.");
    }
  };

  const handleClear = () => console.log("Cleared");

  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ textAlign: "center", fontSize: 22, marginBottom: 20 }}>
        Enter OTP
      </Text>

      <OTPInputComponent 
        length={6}
        onComplete={handleOTPComplete}
        onClear={handleClear}
      />
    </View>
  );
}
