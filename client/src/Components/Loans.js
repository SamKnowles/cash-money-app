import React, { Component } from 'react'
import Form from '../Components/Form';


export default class Loans extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form loans={['Personal', 'Student', 'Credit card', 'Other']}></Form>
            </div>
        )
    }
}
