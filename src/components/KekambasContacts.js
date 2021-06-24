import React, { Component } from 'react'

export default class KekambasContacts extends Component {
    render() {
        const kekambas = this.props.kekam
        return (
            <tr key={this.props.index}>
                <td>{kekambas.first_name}</td>
                <td>{kekambas.last_name}</td>
                <td>{kekambas.id}</td>
            </tr>
        )
    }
}
