import { StyleSheet, TextStyle } from "react-native";
import Colors from "../Colors";

const textStyle = (style?: TextStyle) => StyleSheet.create({
    text:{
        color: Colors().neutral.five,
        ...style
    },
});

export default textStyle