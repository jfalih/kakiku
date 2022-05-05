import React from 'react';
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Colors from '../../components/atoms/Colors';
import Text from '../../components/atoms/Text';
import Buttons from '../../components/molecules/Buttons';
import Wallet from '../../components/molecules/Wallet';
import Header from '../../components/organisms/Header';

const Home = () => {
   const Color = Colors();
   return (
      <SafeAreaView style={{
        flex:1,
        backgroundColor:Color.neutral.one
      }}>
          <Header/>
          <ScrollView style={{
            flex:1,
            padding:20,
            backgroundColor:Color.neutral.one
          }}>

          <View style={{
            flexDirection:'row',
            alignItems:'flex-start',
            marginBottom:40,
            justifyContent:'space-between'
          }}>
            <Buttons 
              type='ButtonHelper' 
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/smartphone.png')} />
              }
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              text={`Pulsa &\nPaket Data`}
            />
            <Buttons
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  height:30
                }} source={require('../../assets/icons/joystick.png')} />
              }
              text={`Voucher\nGames`}
            />
            <Buttons 
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/lightning.png')} />
              }
              text={`Token\nPLN`}
            />
            <Buttons 
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/bill.png')} />
              }
              text='Tagihan'
            />
          </View>
          <Wallet style={{
            marginBottom:40
          }}></Wallet>
          <Text style={{
            marginBottom:5
          }} type='subheading' weight='bold'>Warungmu</Text>
          <Text style={{
            marginBottom:20
          }}>Beli apapun dengan mudah </Text>
          <View style={{
            flexDirection:'row',
            marginBottom:40,
            justifyContent:'space-between'
          }}>
            <Buttons 
              type='ButtonHelper' 
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/egg-carton.png')} />
              }
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              text='Sembako'
            />
            <Buttons
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/sembako.png')} />
              }
              text='Sayur'
            />
            <Buttons 
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/chicken.png')} />
              }
              text='Daging'
            />
            <Buttons 
              type='ButtonHelper' 
              style={{
                width:50,
                height:50,
                borderRadius:25
              }}
              textColor={Color.neutral.five}
              color={Color.neutral.two}
              customIcon={
                <Image style={{
                  width:30,
                  position:'absolute',
                  height:30
                }} source={require('../../assets/icons/fruit.png')} />
              }
              text='Buah'
            />
          </View>
          <Text style={{
            marginBottom:40
          }} type='subheading' weight='bold'>Get Deals 🥳</Text>
          <FlatList contentContainerStyle={{
            marginBottom:40
          }} horizontal data={[1,2,3,4]} renderItem={
            () => (
              <View style={{
                marginRight:30,
                width:120
              }}>
                <Image style={{
                  width:120,
                  marginBottom:10,
                  height:120,
                  borderRadius:10
                }} source={{
                  uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/tropical_tropical-2l-minyak-goreng--2-pouch-_full02.jpg'
                }}/>
                <Text type='label' textProps={{
                  numberOfLines:2
                }} style={{
                  marginBottom:5,
                  flex:1,
                }}>Minyak Goreng Tropical 2 Liter kl ipsum</Text>
                <Text type='label' weight='bold'>Rp100.000</Text>
              </View>
            )
          }>

          </FlatList>
          </ScrollView>
      </SafeAreaView>
   );
 };
 
 
 export default Home;
 