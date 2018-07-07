import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        let { labels } = props;
        this.state = {
            labels: labels || [],
            inputs: {}
        }
    }

    componentDidMount() {
        let { labels } = this.props;
        labels.forEach(label => {
            this.setState(prevState => {
                return {
                    inputs: {
                        ...prevState.inputs,
                        [label]: ''
                    }
                }
            }
            );
        });
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    sumFunction = () => {
        let { inputs } = this.state;
        let sum = 0;
        for (let item in inputs) {
            sum += +inputs[item];
        }
        return sum;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let sumTotal = this.sumFunction();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    sumTotal: sumTotal
                }
            }
        });
        alert(this.state.inputs.sumTotal);
    }
    render() {
        return (
            <form>
                <div className='input-wrapper'>
                    {this.state.labels.map((label, i) => {
                        return (
                            <div className='rent' key={label + i}>
                                <label>{label}</label>
                                <input type="number" name={label} value={this.state.inputs[label]} onChange={this.handleChange} />
                            </div>
                        );
                    })}
                    <div className='total-wrapper'>{this.sumFunction()}</div>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}


