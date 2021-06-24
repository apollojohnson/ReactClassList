import React, { Component } from 'react';
import KekambasContacts from '../components/KekambasContacts'

export default class Contact extends Component {
    render() {
        const kekambas = this.props.kekambas
        return (
            <div>
                <table className='table table-striped'>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Id</th>
                </tr>
                </thead>
                <tbody>
                    {kekambas.map((kekam, index) => (<KekambasContacts kekam={kekam} index={index} />))}
                </tbody>

                </table>
            </div>
        )
    }
}
