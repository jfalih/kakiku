
import { StyleSheet, StyleProp } from "react-native";

const WalletStyle = (style: StyleProp<any>) => StyleSheet.create({
    walletContainer:{
        padding:20,
        borderRadius:10,
        flexDirection:'row',
        ...style
    },
    walletLabel:{
        fontWeight:'bold',
        color:'#fff',
        marginBottom:5,
        fontSize:14
    },

});

export default WalletStyle;