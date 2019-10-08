import React, { Component } from 'react'
/*
    React trabalha com  os conceitos de estado 'controlado' e 'não controlado'
    Se o componente for controlado, a verdade absoluta é o JavaScript e não o HTML/DOM

    Ordem: Digito no input -> gera um evento -> evento é capturado -> recarrega o componente
*/

// Field == input
class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue } // Inicializa o estado inicial
        this.handleChange = this.handleChange.bind(this) // Faz um bind para que independemente de quem chame a função 'this' se refira a classe Field
    }

    // Listener de change
    // Sempre que houver uma mudança no field, gera um evento onChange, que é tratado neste método
    handleChange(event) {
        // Evolui o estado
        this.setState({ value: event.target.value })
    }

    // Método render é obrigatório em todo componente no React
    // Retorna o template
    render() {
        return (
            <div>
                {/* Ao ocorrer um change o input chama a função handleChange  */}
                <label>{ this.state.value }</label> <br/>
                <input onChange={ this.handleChange } value={ this.state.value } />
            </div>
        )
    }
}

// Exporta a classe Field, para acessá-la no index
export default Field