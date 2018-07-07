import React from 'react';
import Form from '../Components/Form';
import '../Styles/body.css';

function Body() {
    return (
        <div className='form-wrapper'>
            <Form labels={['string', 'stringy', 'stringgy']}></Form>
        </div>
    )
}

export default Body;
