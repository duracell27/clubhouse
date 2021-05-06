import axios from 'axios';
// import { parseCookies } from 'nookies';

// const cookies = parseCookies();
const instance = axios.create({
    baseURL: 'http://localhost:3000/',
 
})

// const Axios = axios.create({
//   baseURL: 'http://localhost:3001',
//   headers: {
//     Authorization: 'Bearer ' + cookies?.token,
//   },
// });

export default instance;
