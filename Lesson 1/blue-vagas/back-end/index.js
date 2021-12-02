// server (API)

// imports Express
const express = require('express');

// initializes Express
const app = express();

// creates list of job openings
const jobOpenings = [
    {
        id: 1,
        company: "Blue EdTech",
        wages: 3000,
        title: "Front-End, Jr.",
        type: "Internship"
    },
    {
        id: 2,
        company: "Google",
        wages: 10000,
        title: "Front-End, Jr.",
        type: "CLT"
    },
    {
        id: 3,
        company: "Facebook",
        wages: 20000,
        title: "Full-Stack, Sr.",
        type: "PJ"
    },
    {
        id: 4,
        company: "Amazon",
        wages: 15000,
        title: "Front-End, Full",
        type: "CLT"
    }
]

// implements JSON middleware
app.use(express.json());

// creates an endpoint with a message to the client
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// endpoint (GET) /openings - returns the list of job openings
app.get('/openings', (req, res) => {
    res.send(jobOpenings);
});

// endpoint (GET) /openings/{id} - returns a single job opening to client, according to id
app.get('/openings/:id', (req, res) => {
    // accesses id trough requisition
    const idParam = req.params.id;
    // finds an item within an array, according to id
    // sweeps array for an opening with the same id set as param
    const foundOpening = jobOpenings.find(opening => opening.id == idParam);
    // returns the opening, if found, to the front-end
    res.send(foundOpening);
});


// defines back-end execution port
const port = 3000;

// initializes server in defined port
app.listen(port, () => {
    console.log(`App running in port ${port}`);
});