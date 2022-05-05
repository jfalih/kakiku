import React from 'react'
import { SafeAreaView, StatusBar, TouchableOpacity, View, ViewStyle } from 'react-native'
import Colors from '../../atoms/Colors';
import Text from '../../atoms/Text';
import HeaderStyle from './Header.style';
import RemixIcon from 'react-native-remix-icon';

type HeaderProps = {
    style: ViewStyle
};

const Header = ({
    style
}: HeaderProps) => {
    const Color = Colors();
    return(
        <View style={HeaderStyle(style).header}>
            <View style={{
                flexDirection:'row'
            }}>
                <Text weight='bold' type='subheading' style={{
                    color: Color.contra.five,
                    marginBottom:10,
                }}>Logo</Text>
            </View>
            <View style={{
                width:'100%',
                height:40,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:10,
                borderRadius:5,
                backgroundColor:'#f2f2f2'
            }}>
                <RemixIcon name='search-line' size={18} color={Color.neutral.three}/>
                <Text style={{
                    color: Color.neutral.three,
                    marginLeft:10
                }}>Kamu mau belanja apa hari ini?</Text>
            </View>
        </View>
    )
}

export default Header;