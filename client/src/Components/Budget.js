import React, { Component } from 'react';
import { loadBudget } from "../Redux/budget";
import { connect } from "react-redux";
import '../Styles/budget.css';

// import { Switch, Route, Link, withRouter } from "react-router-dom";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: null,
            userId: {

            },
            income: {
                actual: '',
                projected: '',
            },
            housing: {
                mortgageRent: {
                    actual: '',
                },
                phone: {
                    actual: '',
                },
                gas: {
                    actual: '',
                },
                electricity: {
                    actual: '',
                },
                waterSewer: {
                    actual: '',
                },
                internet: {
                    actual: '',
                },
                wasteRemoval: {
                    actual: '',
                },
                maintenance: {
                    actual: '',
                },
                supplies: {
                    actual: '',
                },
                other: {
                    actual: ''
                }
            },
            loans: {
                personal: {
                    actual: '',
                },
                student: {
                    actual: '',
                },
                credit: {
                    actual: '',
                },
                other: {
                    actual: '',
                }
            },
            transportation: {
                vehiclePayment: {
                    actual: '',
                },
                busTrainUber: {
                    actual: '',
                },
                insurance: {
                    actual: '',
                },
                licensing: {
                    actual: '',
                },
                fuel: {
                    actual: '',
                },
                maintenance: {
                    actual: '',
                },
                other: {
                    actual: '',
                }
            },
            entertainment: {
                movies: {
                    actual: '',
                },
                music: {
                    actual: '',
                },
                vacation: {
                    actual: '',
                },
                theater: {
                    actual: '',
                },
                sports: {
                    actual: '',
                },
                winterSports: {
                    actual: '',
                },
                other: {
                    actual: '',
                }
            }
        }
    }

    handleChange = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                [category]: {
                    ...prevState[category],
                    [name]: { actual: value }
                }
            }
        })
    }

    handleSubmit = (e) => {
        this.props.submitBudget(this.state);
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }

    // handleChangeMain = (e, category) => {
    //     const { value, name } = e.target;
    //     this.setState(prevState => {
    //         return {
    //             [category]: {
    //                 ...prevState[category],
    //                 [name]: { actual: value }
    //             }
    //         }
    //     })
    // }

    render() {
        console.log(this.props.budget)
        let { loading, data, handleChange } = this.props.budget;

        console.log();
        return (
            loading ? <div>loading...</div> :
                <div className="budget-wrapper">
                    <div>
                        <label htmlFor="">Actual Income<input value={this.state.income.actual} placeholder="Enter income" /></label>
                        <h3>{data.income.actual}</h3>
                    </div>
                    <label htmlFor="">Mortgage<input name="mortgageRent" type='number' value={data.housing.mortgageRent.actual} placeholder={data.housing.mortgageRent.actual}  onChange={e => this.handleChange(e, "housing")} /><input name="mortgageRent" type="number" value={data.housing.mortgageRent.actual} onChange={e => this.handleChange(e, 'housing')} />
                    </label>
                    <h3>{data.housing.mortgageRent.actual}</h3>
                </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return Budget
// }

export default connect(state => state, { loadBudget })(Budget);
