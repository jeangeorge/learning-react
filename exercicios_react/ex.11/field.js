import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

/*
    React trabalha com  os conceitos de estado 'controlado' e 'não controlado'
    Se o componente for controlado, a verdade absoluta é o JavaScript e não o HTML/DOM

    Ordem: Digito no input -> gera um evento -> evento é capturado -> recarrega o componente
*/

// Field == input
class Field extends Component {
    // Método render é obrigatório em todo componente no React
    // Retorna o template
    render() {
        return (
            <div>
                {/* Ao ocorrer um change o input chama a função handleChange  */}
                <label>{ this.props.value }</label> <br/>
                <input onChange={ this.props.changeValue } value={ this.props.value } />
            </div>
        )
    }
}

// Função que mapeia alguns dos atributos estado (store) para as propriedades dos componentes
// Recebe o estado como parametro
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

// Dispatch -> cara que dispara as ações
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

// Exporta a classe Field, para acessá-la no index
// Padrão de projeto Decorator, retorna Field decorado
export default connect(mapStateToProps, mapDispatchToProps)(Field)