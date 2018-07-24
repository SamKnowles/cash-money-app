import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class Form extends Component {
    constructor(props) {
        super(props);
        let { housing } = props;
        this.state = {
            inputs: {
                housing: {
                    mortgageRent: {
                        projected: '',

                    },
                    phone: {
                        projected: '',

                    },
                    electricity: {
                        projected: '',

                    },
                    gas: {
                        projected: '',

                    },
                    waterSewer: {
                        projected: '',

                    },
                    internet: {
                        projected: '',

                    },
                    wasteRemoval: {
                        projected: '',

                    },
                    maintenance: {
                        projected: '',

                    },
                    supplies: {
                        projected: '',

                    },
                    other: {
                        projected: '',

                    }
                }
            }
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    componentDidMount() {
        // let { categories } = this.props;
        // categories.forEach(category => {
        //     this.setState(prevState => {
        //         return {
        //             inputs: {
        //                 ...prevState.inputs,
        //                 [category]: ''
        //             }
        //         }
        //     }
        //     );
        // });
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    housing: {
                        [name]: {
                            actual: prevState.inputs.housing[name].actual,
                            projected: value
                        }
                    }
                }
            }
        });
    }

    // sumFunction = () => {
    //     let { inputs } = this.state;
    //     let sum = 0;
    //     for (let item in inputs) {
    //         sum += +inputs[item];
    //     }
    //     return sum;
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let sumTotal = this.sumFunction();
    //     this.setState(prevState => {
    //         return {
    //             inputs: {
    //                 ...prevState.inputs,
    //                 sumTotal: sumTotal
    //             }
    //         }
    //     });
    //     alert(this.state.inputs.sumTotal);
    // }
    handleClick = (e) => {
        e.preventDefault()
        this.props.addCategory(this.state.inputs)
    }

    render() {
        console.log(this.props)
        
        let { housing } = this.state.inputs;
        return (
            <Switch>
                <Route  path='/form/home' component={(props) => {
                    return (
                        <div>
                            <h1>housing</h1>
                            <form action="">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </form>
                            <Link to="/form/transportation">trans</Link>
                        </div>
                    )
                }} />
                <Route path='/form/transportation' component={(props) => {
                    return (
                        <div>
                            <h1>transportation</h1>
                            <Link to="/form/loans">loans</Link>
                        </div>
                    )
                }} />
                <Route path='/form/loans' component={(props) => {
                    return (
                        <div>
                            <h1>loans</h1>
                            <button>Submit</button>
                        </div>
                    )
                }} />

            </Switch>
            // {/* <form>
            //     <div className='input-wrapper'>
            //         <input type="text" placeholder='Projected Mortgage Rent' value={housing.mortgageRent.projected} onChange={this.handleChange} name='mortgageRent' />

            //         {this.state.categories.map((category, i) => {
            //             return (
            //                 <div className='rent' key={category + i}>
            //                     <label>{category}</label>
            //                     <input type="number" name={category} value={this.state.inputs[category]} onChange={this.handleChange} />
            //                 </div>
            //             );
            //         })}
            //         <div className='total-wrapper'>{this.sumFunction()}</div>
            //         <button type='submit' onClick={this.handleClick}>Submit</button>
            //     </div>
            // </form> */}
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(Form));