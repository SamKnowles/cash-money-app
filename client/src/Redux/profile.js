// import axios from "axios";

// let profileAxios = axios.create();
// profileAxios
//     .interceptors
//     .request
//     .use((config) => {
//         const token = localStorage.getItem("token");
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     })
// const userUrl = "/api/profile";

// const profileReducer = (prevProfile = { data: {} }, action) => {
//     switch (action.type) {
//         case "EDIT_PROFILE":
//             return { data: action.data }
//         default:
//             return prevProfile
//     }
// }

// export const editProfile = (changes) => {
//     return dispatch => {
//         profileAxios.put(userUrl, changes)
//             .then((response) => {
//                 let { data } = response
//                 dispatch({
//                     type: "EDIT_PROFILE",
//                     data
//                 });
//             })
//             .catch(err =>
//                 console.error(err)
//             )
//     }
// }

// export default profileReducer