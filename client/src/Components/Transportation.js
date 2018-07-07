import React, { Component } from 'react'
import Form from '../Components/Form';


export default class Transportation extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form labels={['Vehcle Payment', 'Public Transportation', 'Insurance', 'Licensing', 'Fuel', 'Maintenance', 'Other']}></Form>
            </div>
        )
    }
}
