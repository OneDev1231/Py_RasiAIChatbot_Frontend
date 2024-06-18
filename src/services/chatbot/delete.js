import axios from 'axios';

export const delete_file_from_chatbot = async (chatbotName, deletefile) => {
    const formData = new FormData();
    formData.append("deletefile", deletefile);
    formData.append("chatbotName", chatbotName);
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete_upserted_file`, formData, {
            withCredentials: true
        });
        console.log('Delete file successfully:', response);
        return response.status;
    } catch (error) {
        console.error('Error delete files:', error.response);
        return error.response.status;
    }
}