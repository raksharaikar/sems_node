const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: 'https://serenialtech.com', // Replace with your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'token'], // Include other headers you need
};

app.use(cors(corsOptions));
app.use(express.json());

// POST endpoint for customer logistic request
app.post('/api/customerLogisticRequest', async (req, res) => {
    try {
        const formData = req.body;
        const headers = req.headers;
        console.log('formData:', formData, headers);

       fetch('http://sems-node.onrender.com/api/customerLogisticRequest', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(formData),
})
.then(response => {
    console.log(token);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Response:', data);
    // Handle the response as needed
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error.message);
});
});

// GET endpoint to verify the service is running
app.get('/api/health', (req, res) => {
    res.json({
        status: 'Service is running',
        exampleData: {
            id: 1,
            name: 'Example Item',
            description: 'This is an example item'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
