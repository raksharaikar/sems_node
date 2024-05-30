const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/customerLogisticRequest', async (req, res) => {
    try {
        const formData = req.body;
        const headers = req.headers;

        const response = await fetch('https://39.108.149.225/api/customerLogisticRequest', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response:', data);
        res.json(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
