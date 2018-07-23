import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

class Form extends Component {
    constructor(props) {
        super(props);
        let { housing, transportation, entertainment, loans, projected, actual } = props;
        this.state = {
            inputs: {
                housing: {
                    mortgageRent: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    phone: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    electricity: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    gas: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    waterSewer: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    internet: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    wasteRemoval: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    maintenance: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    supplies: {
                        projected: projected || '',
                        actual: actual || ''
                    },
                    other: {
                        projected: projected || '',
                        actual: actual || ''
                    }
                }
            }
        }
    }

    componentDidMount() {
        let { categories } = this.props;
        categories.forEach(category => {
            this.setState(prevState => {
                return {
                    inputs: {
                        ...prevState.inputs,
                        [category]: ''
                    }
                }
            }
            );
        });
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState(prevState => {
            console.log(this.props)
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
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
        console.log(this.state.inputs)
        this.props.addCategory(this.state.inputs)
    }

    render() {
        return (
            <form>
                <div className='input-wrapper'>
                    {this.state.categories.map((category, i) => {
                        return (
                            <div className='rent' key={category + i}>
                                <label>{category}</label>
                                <input type="number" name={category} value={this.state.inputs[category]} onChange={this.handleChange} />
                            </div>
                        );
                    })}
                    <div className='total-wrapper'>{this.sumFunction()}</div>
                    <button type='submit' onClick={this.handleClick}>Submit</button>
                </div>
            </form>
        )
    }
}


export default connect(state => state, { addCategory })(Form);