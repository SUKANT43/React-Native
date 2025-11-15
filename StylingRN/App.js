import {View,StyleSheet,Text} from 'react-native'
export default function App(){
  return(
    // <View style={styles.containers}>
    //   <Text style={styles.title}>Hello</Text>
    // </View>
    <View style={styles.containers}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>style inheritance</Text>
      </View>
      <View style={[styles.lightBlueBox,styles.box,styles.lightBlueBox]}>
        <Text style={{borderRadius:5,backgroundColor:"red"}}>Lightblue box</Text>
      </View>
      <View style={[styles.lightGreenBox,styles.box,styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles=StyleSheet.create(
  {
    containers:{
      flex:1,backgroundColor:'plum',padding:60
    },
    box:{
      width:250,
      height:250,
      padding:10,
      borderWidth:2,
      borderColor:"purple",
      borderStyle:"solid",
      borderRadius:30
    },
    lightBlueBox:{
      backgroundColor:"lightblue",
     
    },
     lightGreenBox:{
      backgroundColor:"lightgreen",
     marginTop:10
    },
    boxShadow:{
      shadowColor:"#333333",
      shadowOffset:{
        width:6,
        height:6
      },
      shadowOpacity:0.6,
      shadowRadius:4
    },
    androidShadow:{
      shadowColor:"green",

    },
    darkMode:{
      backgroundColor:"black",
    },
    darkModeText:{
      color:" ",
      fontWeight:"bold"
    }
  }
)