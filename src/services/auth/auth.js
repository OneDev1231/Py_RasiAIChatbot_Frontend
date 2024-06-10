import axios from 'axios'


export const signin = async (email, password) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signin`, { email, password }, { withCredentials: true });
        console.log(response.data)
        if (typeof response.data.status == 'undefined')
            return {success: true, data: "Login is successful!"}
        else {
            console.log("here")
            return { success: false, data: response.data.message}
        }
    } catch (error) {
        return { success: false, data: "Request Failed"};
    }
};

export const signup = async (userName, email, password) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, { userName, email, password });
        console.log(response)
        if (typeof response.data.status == 'undefined')
            return {success: true, data: "User is registered"}
        else
            return { success: false, data: response.data.message}
    } catch (error) {
        return { success: false, data: "Request Failed"};
    }
};