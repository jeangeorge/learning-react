import React, { Component } from 'react'

import Title from '../template/title'
import TextNormal from  '../template/textNormal'
import TextSmall from '../template/textSmall'
import Carousel from '../template/carousel'

export default class Sobre extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Title name='Sobre Nós' />
                        <TextNormal content={["A ", <b>Jean George Inc.</b>, " é uma empresa brasileira fundada em 2018 que tem como objetivo prestar serviços de consultoria, desenvolvimento, implementação, testes emanutenção de software para o mercado global."]} />
                        <TextSmall content={["Temos uma talentosa equipe de profissionais moldada por suas experiências coletivas nos mais diversos setores. A sinergia do que a ", <b>Jean George Inc.</b>," faz vem de uma mistura de paixão pelo sucesso e a habilidade de ajudar a acelerar sua organização."]}/>
                    </div>
                </div>
                <br></br><br></br>
                <Title name='O que falam sobre nós?'/>
                <Carousel/>
            </div>
        )
    }
}