import { StatusBar } from 'expo-status-bar'; // Importa o componente StatusBar do Expo
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'; // Importa os componentes necessários do React Native

export default function App() {
  return (
    <View style={styles.container}> {/* Início do componente principal, definindo o estilo container */}

      <Image style={styles.img} source={require('./src/assets/login.png')} /> {/* Imagem do login */}

      <Text style={styles.text}>Login</Text> {/* Título "Login" */}

      {/* Campo de Email */}
      <View style={styles.inputContainer}> {/* Container para agrupar o rótulo e o campo de entrada */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
        />
      </View>

      {/* Campo de Senha */}
      <View style={styles.inputContainer}> {/* Container para agrupar o rótulo e o campo de entrada */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry={true}
        />
      </View>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.btn}> {/* Botão com estilo */}
        <Text style={styles.txtbtn}>Entrar</Text>
      </TouchableOpacity>

      {/* Link "Esqueci minha senha" */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Barra de status */}
      <StatusBar style="auto" /> {/* Barra de status automática do Expo */}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17a2b8', // Cor de fundo
    alignItems: 'center', // Alinha os itens ao centro
    justifyContent: 'center', // Justifica os itens ao centro
    padding: 20, // Adiciona um preenchimento de 20 unidades
  },

  text: {
    color: 'white', // Cor do texto
    fontSize: 50, // Tamanho da fonte
    fontWeight: '500', // Peso da fonte
    marginBottom: 20, // Margem inferior
  },

  inputContainer: {
    marginBottom: 15, // Margem inferior
    width: '100%', // Largura total
  },

  label: {
    color: 'white', // Cor do texto
    marginBottom: 5, // Margem inferior
  },

  input: {
    color: '#6c757d', // Cor do texto
    width: '100%', // Largura total
    height: 40, // Altura
    borderWidth: 1, // Largura da borda
    borderColor: 'white', // Cor da borda
    backgroundColor: 'white', // Cor de fundo
    padding: 10, // Preenchimento
    justifyContent: 'center', // Justifica o conteúdo ao centro
    alignItems: 'center', // Alinha os itens ao centro
    borderRadius: 5, // Borda arredondada
  },

  img: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 20, // Margem inferior
  },

  btn: {
    backgroundColor: 'black', // Cor de fundo do botão
    width: '70%', // Largura do botão
    height: 35, // Altura do botão
    borderWidth: 1, // Largura da borda
    marginTop: 10, // Margem superior
    justifyContent: 'center', // Justifica o conteúdo ao centro
    alignItems: 'center', // Alinha os itens ao centro
    borderRadius: 5, // Borda arredondada
  },

  txtbtn: {
    color: 'white', // Cor do texto
  },

  forgotPasswordText: {
    color: 'white', // Cor do texto
    marginTop: 10, // Margem superior
  },
});
