import axios from 'axios';

const instance = req => axios.create({
    baseURL: 'http://localhost:7071/api',
    headers: {
        cookie: req.get('cookie') || '',
    },
});

export default instance;
