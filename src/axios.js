import axios from 'axios';


console.log(import.meta.env.VITE_APP_BASE_API);

const instance = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
})

export default instance;

