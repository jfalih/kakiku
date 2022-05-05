import { ViewStyle, StyleSheet } from "react-native";

const BadgeStyle = (style?: ViewStyle) => StyleSheet.create({
    badge:{
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        borderRadius:20,
        ...style
      },
})

export default BadgeStyle