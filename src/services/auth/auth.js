import axios from 'axios'


export const signin = async (email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/signin', { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.detail);
    }
};

export const signup = async (userName, email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/signup', {userName, email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.detail);
    }
};