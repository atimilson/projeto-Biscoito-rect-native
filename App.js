import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';

function App() { 
  const [img, setImg] = useState(require('./src/biscoito.png')); 
  const [textoFrase, setTextoFrase] = useState('');  
  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];
  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(' " '+frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }
  return (
    <View style={styles.area}>      
       <Image source={img}
        style={styles.img}
       />  
       <Text style={styles.texto}>{textoFrase}</Text>

       <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
         <View style={styles.bntArea}>
            <Text style={styles.btnTexto}>
               Quebrar Biscoito
            </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.botao,{ marginTop:15, borderColor:'#121212'} ]} onPress={reiniciarBiscoito}>
         <View style={styles.bntArea}>
            <Text style={[styles.btnTexto, {color:'#121212'}]}>
               Reiniciar Biscoito
            </Text>
         </View>
       </TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
  area :{
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin : 0,
    padding : 0,
  },
  img:{
    width : 250,
    height : 250,
  },
  texto:{
    fontSize : 30,
    color : '#dd7b22',
    margin : 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
     width:230,
     height:50,
     borderColor: '#dd7b22',
     borderWidth: 2,
     borderRadius:25,
  },
  bntArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

})
export default App;