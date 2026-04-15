const express = require('express');
const { ChatGPTAPI } = require('chatgpt');

const app = express();
const port = 3000;

app.use(express.json());

const api = new ChatGPTAPI({ apiKey: 'YOUR_HUGGING_FACE_API_KEY' });

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await api.sendMessage(message);
        res.json({ reply: response.text });
    } catch (error) {
        res.status(500).json({ error: 'Error in API request' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
