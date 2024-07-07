import axios from 'axios';
import toast from 'react-hot-toast';
export const setWACredentials = async (phone_number, token) => {
    const formData = new FormData();
    formData.append("phone_number", phone_number);
    formData.append("token", token);
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/connect_whatsapp`,
            formData,
            { withCredentials: true }
        );
        return response.status
    } catch (error) {
        console.error("Error setting response:", error.response);
        return error.response.status;
    }
};