import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props) // Chama o construtor do pai
        this.state = { value: props.initialValue } // Inicializo o State, variável que vem por herança de Component
    }

    // Método que recebe um valor
    sum(delta) {
        // Chama a função setState, passando para ela um novo objeto, com o value alterado
        // O dado não é alterado, mas sim "EVOLUIDO"
        this.setState({ value: this.state.value + delta })
    }

    // Método obrigatório, retorna o template
    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                {
                    /*
                        Ao clicar no botão, chama uma função
                        É preciso PASSAR uma função, que chama a função sum 
                    */
                }
                <button onClick={() => this.sum(-1)}>-</button>
                <button onClick={() => this.sum(1)}>+</button>
            </div>
        )
    }
}