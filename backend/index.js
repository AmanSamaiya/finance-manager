const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
 require('dotenv').config();

const PORT = process.env.PORT || 8080

require('./Models/db');


app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})