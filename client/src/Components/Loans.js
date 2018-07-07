import React, { Component } from 'react'
import Form from '../Components/Form';


export default class Loans extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form labels={['Personal', 'Student', 'Credit card', 'Other']}></Form>
            </div>
        )
    }
}
