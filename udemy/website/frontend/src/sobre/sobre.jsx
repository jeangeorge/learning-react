import React, { Component } from 'react'

import Title from '../template/title'
import TextNormal from  '../template/textNormal'
import TextSmall from '../template/textSmall'
import Carousel from '../template/carousel'
import Icon from '../template/icon'

export default class Sobre extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Title name='Sobre Nós' />
                            <TextNormal content={["A ", <b>Jean George Inc.</b>, " é uma empresa brasileira fundada em 2018 que tem como objetivo prestar serviços de consultoria, desenvolvimento, implementação, testes emanutenção de software para o mercado global."]} />
                            <TextSmall content={["Temos uma talentosa equipe de profissionais moldada por suas experiências coletivas nos mais diversos setores. A sinergia do que a ", <b>Jean George Inc.</b>," faz vem de uma mistura de paixão pelo sucesso e a habilidade de ajudar a acelerar sua organização."]}/>
                        </div>
                        {/* <br></br><br></br><br></br> */}
                        <div className="col-md-2">
                            <Icon name='glyphicon glyphicon-signal logo' style={{marginTop: '80px'}}/>
                        </div>
                        <div className="col-md-2">
                            <Icon name='glyphicon glyphicon-phone logo' style={{marginTop: '80px'}}/>
                        </div>
                    </div>
                    <br></br><br></br>
                    <Title name='O que falam sobre nós?'/>
                    <Carousel/>
                    <br></br><br></br>
                </div>
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-md-4">
                            <Icon name='glyphicon glyphicon-globe logo' style={{fontSize: '200px',marginLeft: '80px'}}/>
                            <span className=""></span>
                        </div>
                        <div className="col-md-8">
                            <Title name='NOSSOS VALORES' />
                            <TextNormal content={[<strong>MISSÃO:</strong>, " Nossa missão é impulsionar o crescimento dos nossos clientes através de metodologias criativas e eficientes, fornecendo  soluções confiáveis e de alta qualidade que não só definem mercado como também criam valor e vantagem competitiva confiável."]} />
                            <TextSmall content={[<strong>VISÃO:</strong>, " Nossa visão é desenvolver-nos de maneira constante e crescer como uma importante fornecedora de serviços de TI para nos tornarmos líderes no que tange soluções de desenvolvimento WEB no competitivo mercado de tecnologia mundial. Nosso processo profissional, flexível e integrado reflete no que fazemos. Nós sempre orientamos nossos clientes para o sucesso. Temos a capacidade de acelerar e compartilhar rapidamente o excelente trabalho ou produtos da sua organização ou empresa."]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}