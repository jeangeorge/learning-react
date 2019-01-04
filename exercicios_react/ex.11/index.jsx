import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from "./fieldReducer"


// Reducers são funções puras, que recebem o estado original e a ação ocorrida
// Trabalha em cima dos dados e retorna o novo estado da aplicação.
const reducers = combineReducers({
    field: fieldReducer// Arrow funcion que retorna o array contendo o atributo value
})

ReactDOM.render(
    <Provider store={createStore(reducers) }>
        <Field initialValue="Teste" />
    </Provider>
    , document.getElementById('app')
);