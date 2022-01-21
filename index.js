const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
});

const companies = [
    {
        id: 1, 
        name: 'SC PROIKAV SRL'
    },
    {
        id: 2, 
        name: 'SC CLOSURE TECHNOLOGIES SRL'
    },
]
    

app.get('/companies', (req, res) => {
    res.send(companies);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))