import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import Sobre from '../sobre/sobre'
import Servicos from '../servicos/servicos'
import Exemplo from '../exemplo/exemplo'
import Precos from '../precos/precos'
import Contato from '../contato/contato'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/exemplo' component={Exemplo} />
        <Route path='/preco' component={Precos} />
        <Route path='/contato' component={Contato} />
        <Redirect from='*' to='/todos' />
    </Router>
)