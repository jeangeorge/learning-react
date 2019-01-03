import React from 'react'

export default props => (
    <div id="precos" className="container-fluid">
        <div className="text-center">
            <h2>Preços</h2>
            <h4 className="justify">Opa, antes de falar em valores é melhor bater um papo, não? Mas se você quiser se manter antenado sobre o que acontece de mais novo no mundo da tecnologia, assine nosso serviço gratuito de notícias! ;)</h4>
        </div>
        <div className="row">
            <div className="col-sm-4 col-xs-12">
            </div>
            <div className="col-sm-4 col-xs-12 center">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h1>Serviço de Notícias*</h1>
                    </div>
                    <div className="panel-body">
                        <p><strong>Novidades</strong> Tecnológicas</p>
                        <p><strong>Notícias</strong> Sobre nossos novos produtos</p>
                    </div>
                    <div className="panel-footer">
                        <h3>Gratuito</h3>
                        <h4>*Cancele quando quiser</h4>
                        <button className="btn btn-lg" >Assinar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)