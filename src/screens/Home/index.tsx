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
                marginRight:20,
                padding:10,
                borderRadius:10,
                borderColor: Color.neutral.two,
                borderWidth:1,
              }}>
                <Image style={{
                  width:140,
                  marginBottom:10,
                  height:100,
                  borderRadius:10
                }} source={{
                  uri: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnJTIwY2FydG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }}/>
                <Text type='body' style={{
                  marginBottom:10
                }}>Telur ayam 1kg</Text>
                <View style={{
                  justifyContent:'space-between',
                  flexDirection:'row',
                  alignItems:'center'
                }}>
                <View>
                  <Text style={{
                    marginBottom:2,
                  }} type='label' weight='bold'>Harga</Text>
                  <Text>Rp100.000</Text>
                </View>
                <Buttons 
                  type='ButtonHelper' 
                  style={{
                    width:40,
                    height:40,
                    borderRadius:20
                  }}
                  icon='add-line'
                  iconColor={Color.neutral.one}
                  color={Color.primary.three}
                />
                </View>
              </View>
            )
          }>

          </FlatList>
          </ScrollView>
      </SafeAreaView>
   );
 };
 
 
 export default Home;
 