import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../template/custom.css'
import "typeface-roboto"
import "typeface-lato"
import "typeface-bungee"
import "typeface-montserrat"

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import Footer from '../template/footer'

export default props => (
    <div className=''>
        <Menu />
        <Routes />
        <Footer />
    </div>
)