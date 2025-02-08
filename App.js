import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const App = () => {

  const imagens = [
    require('./src/img1.png'),
    require('./src/img2.png'),
    require('./src/img3.png'),
    require('./src/img4.png'),
    require('./src/img5.png'),
  ];


  const [indiceAtual, setIndiceAtual] = useState(0);

 
  const proximaImagem = () => {
    const novoIndice = (indiceAtual + 1) % imagens.length; 
    setIndiceAtual(novoIndice);
  };

  const imagemAnterior = () => {
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length; 
    setIndiceAtual(novoIndice);
  };

  return (
    <View style={styles.container}>
      <Image source={imagens[indiceAtual]} style={styles.imagem} />     

      <View style = {styles.btn}>

        <Button title="Imagem Anterior" onPress={imagemAnterior} />
        <Button title="Próxima Imagem" onPress={proximaImagem} />

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9F3',
  },
  imagem: {
    width: 350,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  }
});

export default App;
