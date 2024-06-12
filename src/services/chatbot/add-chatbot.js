import axios from 'axios';

export const add_new_chatbot = async (chatbot_data) => {
    const formData = new FormData();
    formData.append("name", chatbot_data.name);
    formData.append("prompt", chatbot_data.prompt);
    formData.append("files", chatbot_data.files);

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upsert_file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
        console.log('File uploaded successfully:', response);
        return response.status;
    } catch (error) {
        console.error('Error uploading response:', error.response);
        return error.response.status;
    }
}