import axios from 'axios';

const instance = req => axios.create({
    baseURL: 'http://localhost:8085/api',
});

export default instance;
