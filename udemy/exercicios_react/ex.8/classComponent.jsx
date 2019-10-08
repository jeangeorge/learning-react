import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // Método obrigatório, retorna o template
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}