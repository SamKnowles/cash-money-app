import React, { Component } from 'react'
import { loadProfile } from "../Redux/budget"
import { connect } from "react-redux"


class Budget extends Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {

            
        return (
            <div className="main-view-wrapper">
                Something Here Hopefully
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.budget
}

export default connect(state => state, { loadProfile })(Budget)