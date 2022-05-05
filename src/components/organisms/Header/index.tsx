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
                flexDirection:'row',
                alignItems:'center',
                width:'100%',
                marginBottom:10,
                justifyContent:'space-between'
            }}>
                <Text weight='bold' type='subheading' style={{
                    color: Color.contra.five,
                    marginBottom:10,
                }}>Logo</Text>
                <TouchableOpacity style={{
                    padding:10,
                    maxWidth:160,
                    backgroundColor: '#FFB800',
                    alignItems:'center',
                    borderRadius:10,
                    flexDirection:'row',
                }}>
                    <RemixIcon name="map-pin-2-fill" size={18} color={Color.neutral.one}></RemixIcon>
                    <View style={{
                        marginLeft:5,
                        flex:1
                    }}>
                    <Text style={{
                        color: Color.neutral.one
                    }} type='label' weight='bold'>Lokasimu</Text>
                    <Text textProps={{
                        numberOfLines:1,
                        flex:1
                    }} style={{
                        color: Color.neutral.one
                    }} type='label'>Jakarta, Indonesi asdasdas asdasda</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                width:'100%',
                height:40,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:10,
                borderRadius:5,
                backgroundColor:'#f2f2f2'
            }}>
                <RemixIcon name='search-line' size={18} color={Color.neutral.three}/>
                <Text type='label' weight='reguler' style={{
                    color: Color.neutral.three,
                    marginLeft:10
                }}>Kamu mau belanja apa hari ini?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;