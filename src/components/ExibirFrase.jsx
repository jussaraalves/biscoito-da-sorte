import React, { Component } from 'react'

export class ExibirFrase extends Component {
  render() {
    return (
      <div className="b1">
        <h1 className="title">{this.props.titulo}</h1>
        <h3 className="frase" style={this.props.estilo}>
          {this.props.textoFrase}
        </h3>
        <img className="img" src={this.props.imagemAtual} />
      </div>
    )
  }
}