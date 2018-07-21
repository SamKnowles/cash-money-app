import React, { Component } from 'react'
import {loadProfile} from "../Redux/budget"

export default class Budget extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadProfile()
    }

    render() {
        console.log(this.props)
        let {categories} = this.props
        return (
            <div>
                
            </div>
        )
    }
}
