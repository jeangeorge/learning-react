import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const ExemploList =  props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(exemplo => (
            <tr key={exemplo.id}>
                <td>{exemplo.name}</td>
                <td>{'Rua'}</td>
                <td>{exemplo.phone}</td>
                <td>{exemplo.email}</td>
                <td>
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(exemplo)}
                    ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table table-bordered table-hover table-responsive'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.exemplo.list})

export default connect(mapStateToProps)(ExemploList)