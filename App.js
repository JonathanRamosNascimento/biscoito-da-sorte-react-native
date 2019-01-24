import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius:25
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoText:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold'
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {texto:''};

    this.frases = ['As montanhas da vida não existem apenas para que você chegue no topo, mas para que você aprenda o valor da escalada.', 'A vida pode até te derrubar, mas é você quem escolhe a hora de se levantar.', 'É melhor ser verdadeiro e solitário do que viver em falsidade e estar sempre acompanhado.', 'Na minha vida até agora, descobri que na verdade só há dois tipos de pessoas: aqueles que estão com você, e aqueles que estão contra você. Aprenda a reconhecê-los, pois eles são frequentemente e facilmente confundidos um com o outro.', 'Ser feliz nao é ter uma vida perfeita, mas sim reconhecer que vale a pena viver apesar de todos os desafios e perdas.', 'Aprendi que não devo me importar com comentários que não vão mudar minha vida.', 'A vida tem sons, que pra gente ouvir precisa aprender a começar de novo. É como tocar o mesmo violão e nele compor uma nova canção.', 'Na vida irás encontrar três tipos de pessoas: aquelas que irão mudar a tua vida, aquelas que irão prejudicar a tua vida, aquelas que serão a tua vida.', 'A vida é basicamente uma montanha russa. Tem seus altos e baixos, e o mais importante: você tem que fazer o ingresso valer a pena.'];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito(){
    let s = this.state;

    let r = Math.floor(Math.random() * this.frases.length);

    s.texto = this.frases[r];
    this.setState(s);
  }
  
  render() {
    return (
      <View style={styles.body}>
      <Image source={require('./images/cookie.png')} />
      <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao color="#B59619" text="Quebrar biscoito" onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:17,
    color:'#B59619',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
})