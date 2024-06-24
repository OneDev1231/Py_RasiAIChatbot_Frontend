import axios from 'axios';
import toast from 'react-hot-toast';
export const sendMessage = async (msg, chatbotName) => {
    console.log(msg);
    const formData = new FormData();
    formData.append("botcheck", msg.botcheck);
    formData.append("message", msg.message);
    formData.append("chatbotName", chatbotName);
    formData.append("createdAt", msg.createdAt);
    formData.append("customerId", chatbotName);

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/send_message`,
            formData,
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
        return null;
    }
};