import React from 'react'
import Text from '../../atoms/Text'
import { View } from 'react-native'
import RemixIcon from "react-native-remix-icon"
import WalletStyle from './Wallet.style'
import Badge from '../../atoms/Badge'
import Colors from '../../atoms/Colors'
import Buttons from '../Buttons'
import { memo } from 'react'
const Wallet = (props) => {
  const Color = Colors();
  return (
    <View style={WalletStyle({
      backgroundColor: Color.primary.three,
      ...props.style
    }).walletContainer}>
      <View>
        <Text style={{
          color: Color.contra.one,
          marginBottom: 5
        }} type='label' weight='bold'>Balance</Text>
        <Badge readonly={false} color={Color.primary.two}>
          <Text style={{
            color: '#fff',
            fontSize: 14
          }} type={'body'} weight={'reguler'}>
            Rp100.000
          </Text>
          <Buttons 
            textColor={Color.contra.one}
            type='ButtonHelper' 
            color={Color.contra.one}
            readonly
            customContainerStyle={{
              marginLeft:5
            }}
            style={{
              height:14,
              width:14
            }}
            icon='arrow-right-line'
            iconSize={12}
            iconColor={Color.primary.three} />
        </Badge>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
      }}>
        <Buttons
          textColor={Color.contra.one}
          color={Color.contra.one}
          iconSize={14} 
          iconColor={Color.primary.three}
          type='ButtonHelper'
          text='Bayar' 
          icon='qr-scan-line' 
        />
        <Buttons 
          textColor={Color.contra.one} 
          customContainerStyle={{
            marginLeft:20
          }}
          type='ButtonHelper'
          text='Kirim' 
          icon='apps-2-fill'
          color={Color.contra.one}
          iconSize={14}
          iconColor={Color.primary.three}
        />
        <Buttons
          textColor={Color.contra.one}
          customContainerStyle={{
            marginLeft:20
          }}
          type='ButtonHelper'
          text='Explore'
          icon='apps-2-fill'
          color={Color.contra.one}
          iconSize={14}
          iconColor={Color.primary.three}
        />
      </View>
    </View>
  )
}

export default memo(Wallet)