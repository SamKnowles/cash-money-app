import React, { Component } from 'react';
import Form from '../Components/Form';
import '../Styles/body.css';


export default class Entertainment extends Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form entertainment={['Movies', 'Music', 'Dating', 'Exercise', 'Restaurants', 'Other']}></Form>
            </div>
        )
    }
}

