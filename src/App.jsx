import React, {Component} from "react";
import './assets/css/style.css';

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        textoFrase: '',
        titulo: 'Descubra qual é a sua sorte hoje',
        estiloAplicado: false,
        textoBotao: 'Abrir Biscoito',
        imagemAtual: '../src/assets/fortune-cookie.png'
      }

      this.frases = ['Não existe um caminho para a felicidade. A felicidade é o caminho.', 
      'Não confunda briga com luta: briga tem hora para acabar, luta é para a vida inteira.',
      'Deixa para trás o que não te leva para frente', 'Você erra todos os arremessos que não tenta.',
      'Os mais fortes de todos os guerreiros são estes dois: tempo e paciência.','Tempos difíceis não duram. Pessoas fortes duram.',
      'Não existem métodos fáceis para resolver problemas difíceis.', 'Frágeis usam a violência, e os fortes as ideias.', 
      'As estrelas que brilham mais fortes são também as que queimam mais rápido.', 'Quando perco o telhado não me desespero. Ganho as estrelas.',
      'Dê a quem você ama: asas para voar, raízes para voltar e motivos para ficar.', 'Você é livre para fazer as suas escolhas, mas é prisioneiro das consequências.',
      'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.', 'Acredite que você pode, assim você já está no meio do caminho.',
      'A amizade é um amor que nunca morre.', 'Todos caem, mas apenas os fracos continuam no chão.', 'Você não chegou lá ainda, mas olha o tanto que você cresceu!',
      'Julgue seu sucesso pelas coisas que você teve que renunciar para conseguir.', 'Para ver muita coisa é preciso despregar os olhos de si mesmo.',
      'A mentira nunca vive o suficiente para envelhecer.', 'Não coloque limites em seus sonhos, coloque fé.', 'Aquele que te guarda não dorme.', 
      'Seja hoje a razão do sorriso de alguém.', 'Dê valor a quem te dá amor.', 'Tire o dia para sorrir!', 'Faça valer a pena, as oportunidades não voltam.', 
      'Deixe para trás o que não te leva para frente.', 'Viver é desenhar sem borracha.']

      this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '"'+ this.frases[numeroAleatorio] +'"'
      this.setState(state);

      this.setState({ estiloAplicado: true });
      this.setState({ textoBotao: 'Abrir outro biscoito'})
      this.setState({ imagemAtual: '../src/assets/opened-cookie.png' });
      this.setState({ titulo: 'Uau! esta é sua frase da sorte hoje: '});
    }
    
    render(){
      const { estiloAplicado, imagemAtual, textoBotao } = this.state;
    
      const estilo = estiloAplicado ? {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#e4edf1',
        color: '#dd7b22',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.342)',
        padding: '10px 25px',
        fontSize: '24px',
        fontStyle: 'italic',
        width: '300px',
        height: '90px'
      } : {};

      return(
        <div className="container">
           <h1 className="title">{this.state.titulo}</h1>
           <h3 className="frase" style={estilo}>{this.state.textoFrase}</h3> 
           <img className="img" src={ imagemAtual }/>

           <Botao name={textoBotao} acaoBtn={this.quebraBiscoito}/>
        </div>
      )
    }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button className="botao" onClick={this.props.acaoBtn}>{this.props.name}</button>
      </div>
    )
  }
}

export default App;