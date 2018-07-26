import React from 'react';
import { Switch, Route } from "react-router-dom";

function Category(props) {
    return (
        <Switch>
            <Route path='/form/housing' component={component}/>
            
        </Switch>
        {/* switch (props.match.params.category) {
                            case "loans":
                                return (
                                    <form onSubmit={this.handleSubmit}>
                                    <h3>loans</h3>
                                    <input name="vehiclePayment" value={this.state.loans.vehiclePayment} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="busTrainUber" value={this.state.loans.busTrainUber} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="insurance" value={this.state.loans.insurance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="licensing" value={this.state.loans.licensing} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="fuel" value={this.state.loans.fuel} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="maintenance" value={this.state.loans.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="other" value={this.state.loans.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <button>Submit</button>
                                        <Link to="/form/">Start Over</Link>
                                    </form>
                                )
                            case "transportation":
                                return (
                                    <form action="">
                                    <h3>trans</h3>
                                    <input name="vehiclePayment" value={this.state.transportation.vehiclePayment} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="busTrainUber" value={this.state.transportation.busTrainUber} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="insurance" value={this.state.transportation.insurance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="licensing" value={this.state.transportation.licensing} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="fuel" value={this.state.transportation.fuel} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="maintenance" value={this.state.transportation.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                    <input name="other" value={this.state.transportation.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />

                                        <Link to="/form/loans">loans</Link>
                                    </form>
                                )
                            case "housing":
                                return (
                                    <form action="">
                                        <h3>Housing</h3>
                                        <input name="mortgageRent" value={this.state.housing.mortgageRent} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="phone" value={this.state.housing.phone} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="gas" value={this.state.housing.gas} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="electricity" value={this.state.housing.electricity} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="waterSewer" value={this.state.housing.waterSewer} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="internet" value={this.state.housing.internet} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="wasteRemoval" value={this.state.housing.wasteRemoval} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="maintenance" value={this.state.housing.maintenance} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="supplies" value={this.state.housing.supplies} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="other" value={this.state.housing.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />

                                        <Link to="/form/transportation">trans</Link>
                                    </form>
                                )
                                case "entertainment":
                                return (
                                    <form action="">
                                        <h3>Entertainment</h3>
                                        <input name="movies" value={this.state.entertainment.movies} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="music" value={this.state.entertainment.music} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="vacation" value={this.state.entertainment.vacation} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="theater" value={this.state.entertainment.theater} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="sports" value={this.state.entertainment.sports} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="winterSports" value={this.state.entertainment.winterSports} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <input name="other" value={this.state.entertainment.other} type="text" onChange={e => this.handleChange(e, props.match.params.category)} />
                                        <Link to="/form/housing">housing</Link>
                                    </form>
                                )
                        } */}
    )
}

export default Category
