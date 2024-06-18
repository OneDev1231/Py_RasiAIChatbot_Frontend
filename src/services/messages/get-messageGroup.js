import axios from 'axios';
import toast from 'react-hot-toast';
export const getTestMessageGroup = async (chatbotName) => {
    console.log(chatbotName);
    const formData = new FormData();
    formData.append("chatbotname", chatbotName);
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/get_test_msgGroup`,
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
        return { success: false, data: "Request Failed"};
    }
};