import React, { Component } from 'react'
export class Botao extends Component {
  render() {
    return (
      <div>
        <button className="botao" onClick={this.props.acaoBtn}>
          {this.props.name}
        </button>
      </div>
    )
  }
}