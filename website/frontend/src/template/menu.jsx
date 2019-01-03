import React from 'react'

export default props => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <a className='navbar-brand' href='#'>
                    <i className='glyphicon glyphicon-sound-stereo'></i> Jean George Inc.
                </a>
            </div>

            <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#/sobre">SOBRE</a></li>
                <li><a href="#/servicos">SERVIÇOS</a></li>
                <li><a href="#/exemplo">EXEMPLO</a></li>
                <li><a href="#/precos">PREÇOS</a></li>
                <li><a href="#/contato">CONTATO</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
)