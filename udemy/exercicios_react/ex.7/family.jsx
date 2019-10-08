import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'  // Importo a função 'childrenWitProps de reactUtils

export default props => (
    <div>
        <h1>Família</h1>
        { childrenWithProps(props.children, props) }
    </div>
)