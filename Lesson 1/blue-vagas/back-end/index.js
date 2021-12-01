// server (API)

// imports Express
const express = require('express');

// initializes Express
const app = express();

// implements JSON middleware
app.use(express.json());

// creates an endpoint with a message to the client
app.get('/', (req, res) => {
    res.send('Hello World');
})

// defines back-end execution port
const port = 3000;

// initializes server in defined port
app.listen(port, () => {
    console.log(`App running in port ${port}`);
});