import React, { Component } from 'react'
import { loadBudget } from "../Redux/budget"
import { connect } from "react-redux"


class Budget extends Component {

    componentDidMount() {
        this.props.loadBudget();
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

export default connect(state => state, { loadBudget })(Budget)