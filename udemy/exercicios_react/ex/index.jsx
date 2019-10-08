import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from "./counterReducer"
import Counter from './counter'


// Reducers são funções puras, que recebem o estado original e a ação ocorrida
// Trabalha em cima dos dados e retorna o novo estado da aplicação.
const reducers = combineReducers({
    counter: counterReducer// Arrow funcion que retorna o array contendo o atributo value
})

ReactDOM.render(
    <Provider store={createStore(reducers) }>
        <Counter />
    </Provider>
    , document.getElementById('app')
);