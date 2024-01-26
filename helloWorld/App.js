import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('./src/assets/appimage.png')} />
      <Text style={styles.text}>APP Update </Text>


      <TextInput
        style={styles.input}
        defaultValue='Digite o nome do aplicativo que deseja atualizar'
      />

    <TouchableOpacity style={styles.btn}>

    <Text>Atualizar</Text>

    </TouchableOpacity>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '500'
  },

  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 10

  }
  ,

  img: {
    width: 100,
    height: 100,

  }
,
 btn:{

  borderColor: 'black',
  backgroundColor: 'white',
  width:'70%',
  height:35,
  borderWidth: 1,
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
 }

});
