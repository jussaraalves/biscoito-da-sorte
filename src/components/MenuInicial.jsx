import React, { Component } from 'react';

export class MenuInicial extends Component {
  render() {
    return (
      <div className="b1">
        <h1 className="title">{this.props.titulo}</h1>
        <img className="img" src={this.props.imagemAtual} />
      </div>
    )
}
}