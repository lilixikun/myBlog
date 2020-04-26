import axios from 'axios';

const instance = req => axios.create({
    baseURL: 'http://localhost:7001/api',
});

export default instance;
