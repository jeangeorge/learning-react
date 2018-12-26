import React from 'react';
import ReactDOM from 'react-dom';
import Member from './member'
import Family from './family'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='Jean'/>
        <Member name='Rafael'/>
        <Member name='Júlia'/>
    </Family>
    , document.getElementById('app')
);