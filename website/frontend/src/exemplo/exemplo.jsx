import React, { Component } from 'react'
import Title from '../template/title'
import ExemploForm from './exemploForm'
import ExemploList from './exemploList'

export default class Exemplo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        console.log('refresh')
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        console.log('add')
    }

    handleRemove(exemplo) {
        console.log('remove')
    }

    handleMarkAsDone(exemplo) {
        console.log('markAsDone')
    }

    handleMarkAsPending(exemplo) {
        console.log('markAsPending')
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Title name='Exemplo'> </Title>
                    <ExemploForm
                        description={this.state.description}
                        handleAdd={this.handleAdd}
                        handleChange={this.handleChange}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear}
                    />
                    <ExemploList
                        list={this.state.list}
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending}
                        handleRemove={this.handleRemove}
                    />
                </div>
            </div>
        )
    }
}