import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Inicio from '../inicio/inicio'
import Sobre from '../sobre/sobre'
import Servicos from '../servicos/servicos'
import Exemplo from '../exemplo/exemplo'
import Precos from '../precos/precos'
import Contato from '../contato/contato'

export default props => (
    <Router history={hashHistory}>
        <Route path='/inicio' component={Inicio} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/exemplo' component={Exemplo} />
        <Route path='/precos' component={Precos} />
        <Route path='/contato' component={Contato} />
        <Redirect from='*' to='/inicio' />
    </Router>
)