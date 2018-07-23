import React, { Component } from 'react'
import Form from '../Components/Form';


export default class Housing extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form housing={['Mortgage or rent', 'Phone', 'Electricity', 'Gas', 'Water and Sewer', 'Cable, Waste removal', 'Maintenance or repairs', 'Supplies', 'Other']}></Form>
            </div>
        )
    }
}

