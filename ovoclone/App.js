import React,{Component} from 'react'
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  greetingText: {
    fontSize: 60,
    fontWeight: 'bold',
    position:'absolute',
    color : 'white',
    marginLeft:15,
    top:5,
  },
  secondText: {
    fontSize: 18,
    position: 'absolute',
    color: 'white',
    top:75,
    marginLeft:20,
  },
  thridText:{
    fontSize:35,
    position:'absolute',
    color:'white',
    marginLeft:40,
    top:95,
  },
  fourText:{
    fontSize:18,
    position:'absolute',
    color:'white',
    marginLeft:20,
    top:140,
  },
  ovo:{
    marginHorizontal:17,
    height:70,
    marginTop:-60,
    backgroundColor:'white',
    elevation:9,
    borderRadius:40,
    top:25,

  },
  oneText:{
    top:12,
    marginLeft:53,
    color:'#2F4F4F',
  },
  twoText:{
    top:13,
    marginLeft:53,
    color:'#2F4F4F',
  },
  triText:{
    marginLeft: 278,
    fontSize:50,
    position:'absolute',
    color:'#2F4F4F',

  },
  
  loading:{
    marginHorizontal:19,
    height:63,
    marginTop:-60,
    backgroundColor:'#ADD8E6',
    elevation:5,
    borderRadius:20,
    top:110,
  },
  garis:{
    marginHorizontal:0,
    height:10,
    backgroundColor:'gainsboro',
    top:137,
  },
  garisbawah:{
    marginHorizontal:0,
    height:60,
    backgroundColor:'white',
    top:160,
    elevation:5,
    borderRadius:9,
  }
})

class Home extends Component{
  render() {
   return (
     <View>
      <StatusBar barStyle="dark-content"  backgroundColor="rgba(0,0,0,0)" />
      <Image style={{width:600, height:210, }} source={require("./asset/layar.png")} />
      <Image style={{width:45, height:45,  position:'absolute', marginLeft:310, top:22}} source={require("./asset/lonceng.png")} />
      
      <View style={styles.ovo}>
        <Image style={{height:45, width:45, alignSelf:'center', position:'absolute', top:7}} source={require("./asset/transfer.png")} />
        <Image style={{height:45, width:45, position:'absolute', top:7, marginLeft:244}} source={require("./asset/history.png")} />
        <Image style={{height:45, width:45, position:'absolute', top:6, marginLeft:35}} source={require("./asset/duid.png")} />

        <Text style={{top:48, marginLeft:38}}>Top Up</Text>
        <Text style={{top:30, marginLeft:138}}>Transfer</Text>
        <Text style={{top:13, marginLeft:244}}>History</Text>
      </View>
      
      
      <View style={styles.loading}>
        <Text style={styles.oneText}>Upgrade ke OVO Premiere</Text>
        <Text style={styles.twoText}>Dapatkan lebih banyak keuntungan!</Text>
        <Text style={styles.triText}>></Text>
        <Image style={{height:45, width:45, position:'absolute', top:9, marginLeft:5}} source={require("./asset/load.png")} />

      </View>

      <Image style={{height:45, width:45, position:'absolute', top:355,   marginLeft:35}} source={require("./asset/pln.png")} />
      <Image style={{height:45, width:45, position:'absolute', top:355, marginLeft:110}} source={require("./asset/pulsa.png")} />
      <Image style={{height:45, width:45, position:'absolute', top:355, marginLeft:189}} source={require("./asset/paket.png")} />
      <Image style={{height:50, width:50, position:'absolute', top:355, marginLeft:270}} source={require("./asset/air.png")} />
      <Image style={{height:48, width:48, position:'absolute', top:430, marginLeft:35}} source={require("./asset/bpjs.png")} />
      <Image style={{height:47, width:47, position:'absolute', top:430, marginLeft:110}} source={require("./asset/tv.png")} />
      <Image style={{height:45, width:45, position:'absolute', top:430, marginLeft:189}} source={require("./asset/telepon.png")} />
      <Image style={{height:45, width:45, position:'absolute', top:430, marginLeft:270}} source={require("./asset/lainnya.png")} />


      <Text style={{top:185, marginLeft:43}}>PLN</Text>
      <Text style={{top:167, marginLeft:116}}>Pulsa</Text>
      <Text style={{top:149, marginLeft:181}}>Paket Data</Text>
      <Text style={{top:131, marginLeft:267}}>Air PDAM</Text>
      <Text style={{top:185, marginLeft:43}}>BPJS</Text>
      <Text style={{top:166, marginLeft:97}}>Internet & TV</Text>
      <Text style={{top:164, marginLeft:118}}>Kabel</Text>
      <Text style={{top:131, marginLeft:190}}>Telkom</Text>
      <Text style={{top:111, marginLeft:270}}>Lainnya</Text>

      <View style={styles.garis}></View>
      <View style={styles.garisbawah}>
        <Image style={{height:40, width:40, position:'absolute', top:6, marginLeft:10}} source={require("./asset/home.png")} />
        <Image style={{height:35, width:35, position:'absolute', top:8, marginLeft:90}} source={require("./asset/deal.png")} />
        <Image style={{height:45, width:45, position:'absolute', alignSelf:'center', top:0, marginLeft:160}} source={require("./asset/scan.png")} />
        <Image style={{height:40, width:40, position:'absolute', top:6, marginLeft:235}} source={require("./asset/finance.png")} />
        <Image style={{height:40, width:40, position:'absolute', top:6, marginLeft:310}} source={require("./asset/profile.png")} />
        
        <Text style={{top:40, marginLeft:12}}>Home</Text>
        <Text style={{top:22, marginLeft:90}}>Deals</Text>
        <Text style={{top:5, marginLeft:165}}>Scan</Text>
        <Text style={{top:40, position:'absolute', marginLeft:232}}>Finance</Text>
        <Text style={{top:40, position:'absolute',marginLeft:311}}>Profile</Text>
      </View>


      <Text style={styles.greetingText}>OVO</Text>
      <Text style={styles.secondText}>OVO Cash</Text>
      <Text style={styles.thridText}>Rp 16000 </Text>
      <Text style={styles.fourText}>OVO Points  0 </Text>
     </View>

    )

  }
}

export default Home