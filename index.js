const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello Express!'});
})

app.listen(3002, () => {
    console.log('Server is running on port 3002');
})