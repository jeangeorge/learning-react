import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const ExemploList =  props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(exemplo => (
            <tr key={exemplo._id}>
                <td className={exemplo.done ? 'maskedAsDone' : ''}>{exemplo.description}</td>
                <td>
                    <IconButton 
                        style='success'
                        icon='check'
                        hide={exemplo.done}
                        onClick={() => props.handleMarkAsDone(exemplo)}
                    ></IconButton>
                    <IconButton
                        style='warning'
                        icon='undo'
                        hide={!exemplo.done}
                        onClick={() => props.handleMarkAsPending(exemplo)}
                    ></IconButton>
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        hide={!exemplo.done}
                        onClick={() => props.handleRemove(exemplo)}
                    ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
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