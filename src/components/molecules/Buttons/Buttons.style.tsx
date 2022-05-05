import { StyleSheet, ViewStyle } from "react-native";

const ButtonsStyle = (style?: ViewStyle) => StyleSheet.create({
    helperContainer:{
        alignItems:'center',
        justifyContent:'center',
        ...style
    },
    helper:{
        alignItems:'center',
        justifyContent:'center',
        width:30,
        borderRadius:10,
        height:30,
        ...style
    },
    textHelper:{
        textAlign:'center',
        ...style
    }
});

export default ButtonsStyle;