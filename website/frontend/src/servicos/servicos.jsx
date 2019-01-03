import React from 'react'

export default props => (
    <div className="container-fluid text-center">
        <h2>SERVIÇOS</h2>
        <h4>O que nós te oferecemos?</h4>
        <div className="row">
            <div className="col-md-4">
                <span className="glyphicon glyphicon-off logo-small"></span>
                <h4>PODER</h4>
                <p className="justify">Sim, poder! Nossas soluções são pensadas e concebidas com o objetivo de aproveitar ao máximo o que as tecnologias podem oferecer.</p>
            </div>
            <div className="col-md-4">
                <span className="glyphicon glyphicon-heart logo-small"></span>
                <h4>AMOR</h4>
                <p className="justify">Nossos profissionais amam o que fazem e também vão amar lhe ajudar!</p>
            </div>
            <div className="col-md-4">
                <span className="glyphicon glyphicon-lock logo-small"></span>
                <h4>CONFIABILIDADE</h4>
                <p className="justify" >Confiamos muito no potencial da nossa equipe e trabalhamos para que nossos clientes passem a fazer o mesmo. </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <span className="glyphicon glyphicon-leaf logo-small"></span>
                <h4>SUSTENTABILIDADE</h4>
                <p className="justify">Visamos proporcionar um crescimento positivo sem maltratar nosso ambiente e a mãe natureza. </p>
            </div>
            <div className="col-md-4">
                <span className="glyphicon glyphicon-certificate logo-small"></span>
                <h4>CERTIFICAÇÃO</h4>
                <p className="justify" >Possuímos uma equipe altamente qualificada que certamente pode resolver o seu problema!</p>
            </div>
            <div className="col-md-4">
                <span className="glyphicon glyphicon-wrench logo-small"></span>
                <h4>TRABALHO DURO</h4>
                <p className="justify">Com a gente não tem moleza! Trabalhamos com garra e afinco diariamente.</p>
            </div>
        </div>
    </div>
)