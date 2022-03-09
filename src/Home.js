import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const { width, height } = Dimensions.get("window");

export default function Home() {
  const [active, setActive] = useState('home')
  return (
    <SafeAreaView style={styles.screen}>
      {/* upper part or nav bar */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
        {/* menu icon */}
        <View style={{ backgroundColor:'#242424', width:56, height:67, borderRadius:16, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./images/menu.png')} style={{width:'45%', height:'40%'}} />
        </View>
        {/* settings icon and profile pic */}
        <View style={{width:'43%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{ backgroundColor: '#242424', width: 56, height: 67, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./images/settings.png')} style={{ width: 30, height: 30 }}  />
          </View>
          <View style={{ borderWidth: 2, borderRadius: 33.5, borderColor:'yellow', height:67, width:67, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./images/profilepic.png')} style={{width:56, height:56}} />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{width:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{ color: 'white', width: '100%', textAlign: 'left', fontSize: 26, fontWeight: '900', marginVertical: 20 }}>Welcome Varun!</Text>
        {/* offers */}
        <View style={{ display:'flex', flexDirection:'row',backgroundColor: '#242424', width: '100%', borderRadius: 50, justifyContent: 'space-between', alignItems: 'center', padding:30}}>
          <View style={{ backgroundColor:'#1C1C1C', height:75, width:75, borderRadius:13, padding:10}}>
            <Image source={require('./images/money.png')} style={{width:'100%', height:'100%'}} />
          </View>
          <View style={{width:'75%'}}>
            <Text style={{color:'white', fontWeight:'900', fontSize:22}}>Rs. 100 Cashback</Text>
            <Text style={{ color:'#E1E0E3'}}>Refer a friend to download Justice poker and get Rs. 100 cashback bonus in your justice poker wallet.</Text>
          </View>
        </View>
        {/* categories */}
        <Text style={{ width: '100%', textAlign: 'left', marginVertical: 20, fontSize: 24, fontWeight: '500', color: '#E1E0E3' }}>Categories</Text>
        <View style={{width:'100%', justifyContent:'space-between', alignItems:'center', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {/* category 1 */}
          <View style={{ width: '47%', height: 190, backgroundColor: '#242424', borderRadius: 33, marginVertical: 20, justifyContent:'space-between', alignItems:'center', padding:20 }}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <View style={{ width: 50, height: 50, backgroundColor:'#1C1C1C', justifyContent:'center', alignItems:'center', borderRadius:15, padding:10}}>
                <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', borderRadius:25, borderColor:'white', borderWidth:1}}>
                  <Image source={require('./images/cup.png')} style={{width:14, height:14}} />
                </View>
              </View>
              <View>
                <Text style={{color:'#E1E0E3', fontWeight:'900', textAlign:'center'}}>3</Text>
                <Text style={{color:'#E1E0E3'}}>Live</Text>
              </View>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ color:'#E1E0E3', fontWeight:'900', fontSize:15}}>Tournaments</Text>
              <Text style={{ color: '#E1E0E3', fontSize: 12 }}>Win Big. Justice Poker Tournaments</Text>
            </View>
            <View style={{width:'100%'}}>
              <Text style={{ color: '#E1E0E3', fontWeight: '900', fontSize: 15, width:'100%', textAlign:'left' }}>Join</Text>
            </View>
        </View>
          {/* category 2 */}
          <View style={{ width: '47%', height: 190, backgroundColor: '#242424', borderRadius: 33, marginVertical: 20, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <View style={{ width: '100%' }}>
              <View style={{ width: 50, height: 50, backgroundColor: '#1C1C1C', justifyContent: 'center', alignItems: 'center', borderRadius: 15, padding: 10 }}>
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: 'white', borderWidth: 1 }}>
                  <Image source={require('./images/private.png')} style={{ width: 14, height: 14 }} />
                </View>
              </View>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ color: '#E1E0E3', fontWeight: '900', fontSize: 15 }}>Private Tables</Text>
              <Text style={{ color: '#E1E0E3', fontSize: 12 }}>Create free tables and play with family and friends</Text>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ color: '#E1E0E3', fontWeight: '900', fontSize: 15, width: '100%', textAlign: 'left' }}>Join</Text>
            </View>
          </View>
          {/* category 3 */}
          <View style={{ width: '47%', height: 190, backgroundColor: '#242424', borderRadius: 33, marginVertical: 20, justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <View style={{ width: '100%' }}>
              <View style={{ width: 50, height: 50, backgroundColor: '#1C1C1C', justifyContent: 'center', alignItems: 'center', borderRadius: 15, padding: 10 }}>
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: 'white', borderWidth: 1 }}>
                  <Image source={require('./images/rupee.png')} style={{ width: 11, height: 15 }} />
                </View>
              </View>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ color: '#E1E0E3', fontWeight: '900', fontSize: 15 }}>Cash Tables</Text>
              <Text style={{ color: '#E1E0E3', fontSize: 12 }}>Real Money Gaming</Text>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{ color: '#E1E0E3', fontWeight: '900', fontSize: 15, width: '100%', textAlign: 'left' }}>Join</Text>
            </View>
          </View>
        {/* category 4 */}
          <View style={{ width: '47%', height: 190, borderRadius: 33, marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute', top: '20%', zIndex: 1, elevation: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'none'}}>
              <View style={{ backgroundColor: '#ED1B24', justifyContent: 'center', alignItems: 'center', paddingVertical:5, paddingHorizontal:12, borderRadius:4 }}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.73)', fontWeight: '900' }}>REGISTERING</Text>
              </View>
              <Text style={{color:'black', fontSize:16, fontWeight:'900'}}>Republic Day</Text>
              <Text style={{color:'black', fontSize:15}}>10K GTD Tournament </Text>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '900'}}>Join</Text>
            </View>
            <Image source={require('./images/greenbg.png')} style={{ width: '100%', height: '39%' }} />
        </View>
        </View>
      </ScrollView>
      {/* footer here */}
      <View style={{ width: '100%', backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 25, display: 'flex', flexDirection: 'row', borderTopColor:'#7a7a7a', borderTopWidth:2 }}>
        <TouchableOpacity
          style={{ paddingVertical: 23,paddingHorizontal:16, backgroundColor: active == 'home' ?'#424242':'black', justifyContent:'center', alignItems:'center', borderTopColor:active=='home'?'white':'none', borderWidth:active=='home'?2:0}}
          onPress={()=>setActive('home')}
        >
          <MaterialIcons
            name='home'
            size={40}
            color={active=='home' ? 'white' :'#858585'}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 23,paddingHorizontal:16, backgroundColor: active == 'rooms' ? '#424242' : 'black', justifyContent: 'center', alignItems: 'center', borderTopColor: active == 'rooms' ? 'white' : 'none', borderWidth: active == 'rooms' ? 2 : 0 }}
          onPress={() => setActive('rooms')}
        >
          <MaterialIcons
            name='chat'
            size={40}
            color={active=='rooms' ? 'white' :'#858585'}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 23,paddingHorizontal:16, backgroundColor: active == 'security' ? '#424242' : 'black', justifyContent: 'center', alignItems: 'center', borderTopColor: active == 'security' ? 'white' : 'none', borderWidth: active == 'security' ? 2 : 0 }}
          onPress={() => setActive('security')}
        >
          <MaterialIcons
            name='lock'
            size={40}
            color={active=='security' ? 'white' :'#858585'}
        />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 23,paddingHorizontal:16, backgroundColor: active == 'notifications' ? '#424242' : 'black', justifyContent: 'center', alignItems: 'center', borderTopColor: active == 'notifications' ? 'white' : 'none', borderWidth: active == 'notifications' ? 2 : 0 }}
          onPress={() => setActive('notifications')}
        >
          <MaterialIcons
            name='notifications'
            size={40}
            color={active=='notifications' ? 'white' :'#858585'}
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // width: width,
    // height: height,
    paddingHorizontal: 15,
    paddingVertical:10,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor:'black'
  },
})