// import React, { Component } from "react";
// import ProfileForm from "./ProfileForm.js";
// import { connect } from "react-redux";
// import { editProfile } from "../Redux/profile";

// class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: {
//                 username: ""
//             }
//         }
//     }

//     handleChange = (e) => {
//         let {name, value} = e.target;
//         this.setState((prevState) => {
//             return {
//                 inputs: {
//                     ...prevState.inputs,
//                     [name]: value
//                 }
//             }
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.editProfile(this.state.inputs)
//     } 

//     render() {
//         return (
//             <div className="login-signup-form-wrapper">
//                 <ProfileForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputs={this.state.inputs}>

//                 </ProfileForm >
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return state;
// }

// export default connect(mapStateToProps, { editProfile })(Profile);