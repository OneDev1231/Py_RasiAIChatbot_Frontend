import axios from 'axios';

export const add_new_chatbot = async (chatbot_data) => {
    const formData = new FormData();
    formData.append("name", chatbot_data.name);
    formData.append("prompt", chatbot_data.prompt);
    chatbot_data.files.forEach((file) => {
        formData.append("files", file); // Ensure files are appended correctly
    });

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add_chatbot`, formData, {
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