import { StyleSheet } from "react-native";
import Colors from "../../atoms/Colors";

const HeaderStyle = (style) => StyleSheet.create({
    header:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor: Colors().neutral.two,
        justifyContent:'space-between',
        alignItems:'center',
        ...style
    }
});

export default HeaderStyle