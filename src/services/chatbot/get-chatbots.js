import axios from 'axios';
import toast from 'react-hot-toast';
export const getChatbots = async () => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/getChatbots`,
            {},
            { withCredentials: true }
        );
        if (response.status == 200) {
            const data = response.data;
            return data
        }
        else {
            toast.error(response.statusText);
            return null
        }
    } catch (error) {
        toast.error(error.response.statusText);
        return { success: false, data: "Request Failed"};
    }
};