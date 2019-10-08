import React from 'react';
import ReactDOM from 'react-dom';
import Member from './member'
import Family from './family'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='Jean'/>
    </Family>
    , document.getElementById('app')
);