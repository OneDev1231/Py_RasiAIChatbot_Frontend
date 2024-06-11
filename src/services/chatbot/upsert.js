import axios from 'axios';

export const existing_chatbot_upsert_file = async (chatbotName, uploadedFile) => {
    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("chatbotName", chatbotName);

    try {
        console.log("Hello")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upsert_file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
        console.log('File uploaded successfully:');
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}