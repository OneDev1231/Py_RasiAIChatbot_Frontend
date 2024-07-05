import axios from 'axios';

export const add_new_chatbot = async (chatbot_data) => {
    console.log(chatbot_data)
    const formData = new FormData();
    formData.append("chatbot_name", chatbot_data.chatbot_name);
    formData.append("business_name", chatbot_data.business_name);
    formData.append("industry", chatbot_data.industry);
    formData.append("primary_language", chatbot_data.primary_language);
    formData.append("selected_functions", chatbot_data.selected_functions);
    formData.append("communication_style", chatbot_data.communication_style);

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
        const status_code = response.status;
        const prompt_text = response.data.prompt;

        console.log('Status Code:', status_code);
        console.log('Prompt Text:', prompt_text);
        return [status_code, prompt_text];
    } catch (error) {
        console.error('Error uploading response:', error.response);
        return [error.response.status, null];
    }
}