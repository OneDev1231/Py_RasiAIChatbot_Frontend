import axios from 'axios';
export const getChatbots = async () => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/getChatbots`,
            {},
            { withCredentials: true }
        );
        const data = response.data;

        return data
    } catch (error) {
        return { success: false, data: "Request Failed"};
    }
};