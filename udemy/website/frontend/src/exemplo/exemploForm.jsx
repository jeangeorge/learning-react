import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { addUser, changeName, changeAddress, changePhone, changeEmail, search } from './exemploActions'

class ExemploForm extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { addUser, search, user } = this.props
        return (
            <div role='form' className='exemploForm' style={{marginBottom: '30px'}}>
                <div className="row">
                    <Grid cols='12 3 3'>
                        <input
                            id='name' className='form-control' placeholder='Digite o nome'
                            value={this.props.name} onChange={this.props.changeName}>
                        </input>
                    </Grid>
                    <Grid cols='12 3 4'>
                        <input
                            id='address' className='form-control' placeholder='Digite o endereço'
                            value={this.props.address} onChange={this.props.changeAddress}>
                        </input>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <input
                            id='phone' className='form-control' placeholder='Digite o telefone'
                            value={this.props.phone} onChange={this.props.changePhone}>
                        </input>
                    </Grid>
                    <Grid cols='12 3 3'>
                        <input
                            id='email' className='form-control' placeholder='Digite o email'
                            value={this.props.email} onChange={this.props.changeEmail}>
                        </input>
                    </Grid>
                </div>
                <div className="row" style={{marginTop: '10px'}}>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' icon='plus' onClick={() => addUser(this.props.name, this.props.address, this.props.phone, this.props.email)}></IconButton>
                        <IconButton style='info' icon='search' onClick={() => search()}></IconButton>
                        <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        name: state.exemplo.name,
        address: state.exemplo.address,
        phone: state.exemplo.phone,
        email: state.exemplo.email
    }
)
const mapDispatchToProps = dispatch => bindActionCreators({ addUser, changeName, changeAddress, changePhone, changeEmail, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExemploForm)