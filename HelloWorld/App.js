import {View,Text,Image, ImageBackground} from 'react-native';

export default function App(){
  return(
<View style={{flex:1,backgroundColor:"plum",padding:60}}>
  {/* <Text><Text style={{color:"white"}}>Hello</Text> World</Text>
  <Image source={{uri:"https://picsum.photos/id/237/200/300"}}
    style={{height:200,width:200}}
  ></Image> */}
  <ImageBackground source={{uri:"https://picsum.photos/id/237/200/300"}} style={{flex:1}}>
<Text>Hello</Text>
  </ImageBackground>

</View>
  );
}