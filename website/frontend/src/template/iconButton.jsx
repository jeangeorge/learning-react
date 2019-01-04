import React from 'react'
import If from '../helpers/if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style} style={{marginRight: '8px'}} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)
