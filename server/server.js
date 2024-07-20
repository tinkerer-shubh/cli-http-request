const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.json({message: 'GET request successful'});
});

app.post('/test', (req, res) => {
    res.json({ message: 'POST request successful', data: req.body});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});