import { StyleSheet, TextStyle } from "react-native";

const textStyle = (style?: TextStyle) => StyleSheet.create({
    text:{
        ...style
    },
});

export default textStyle