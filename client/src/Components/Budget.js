import React, { Component } from 'react'
import { loadProfile } from "../Redux/budget"

export default class Budget extends Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        let { data } = this.props;
        map((game, i) => {
            return <AllTheNumBers key={i + AllTheNumBers.title} {...game} index={i}></AllTheNumBers>
        return (
            <div className="main-view-wrapper">


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.budget
}

export default connect(state => state, { loadProfile })(Budget)