import React from 'react'

export default props => (
    <div>
        <div id="contact" className="container-fluid bg-grey">
            <h2 className="text-center">CONTATO</h2>
            <div className="row">
                <div className="col-md-5">
                    <p>Se interessou? Quer bater um papo? Entre em contato com a gente! Funcionamos 24 horas por dia.</p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> Belo Horizonte - MG, Brasil</p>
                    <p><span className="glyphicon glyphicon-phone"></span> +55 31 989322804</p>
                    <p><span className="glyphicon glyphicon-envelope"></span> contato@jeangeorge.com</p>
                </div>
                <div className="col-md-7" id="formContato">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input className="form-control" id="nomeContato" placeholder="Nome" type="text" required/>
                        </div>
                        <div className="col-md-6 form-group">
                            <input className="form-control" id="emailContato" placeholder="E-mail" type="email" required/>
                        </div>
                    </div>
                    <textarea className="form-control" id="mensagemContato"  placeholder="Mensagem" rows="5"></textarea>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <button className="btn btn-default pull-right" id="btnEnviar" type="button">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="googleMap" style={{height:"400px",width:"100%"}}></div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2eI8DX74vpE8wGwkX970N0omDobsZcFY&callback=myMap"></script>
    </div>
)