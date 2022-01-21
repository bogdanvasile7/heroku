const express = require('express');
const app = express();

const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://xrixzmtkrbzjrv:6ba7d612b16f2ba7d6f0346232de2338b9d58924f77f5a8b9d3a0fd644addff8@ec2-52-213-119-221.eu-west-1.compute.amazonaws.com:5432/dfphc4avh67nhh?debug=true'
});



app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.post('/create-table', async (req, res) => {
    try {
        await knex.schema.createTable('users', (table) => {
            table.increments();
            table.string('name');
            table.timestamps();
        });
        res.send('Ok');
    } catch (error) {
        res.send(error.message);
    }
});

app.post('/users', async (req, res) => {
    const name = req.body;

    try {
        await knex('users').insert({ name: name });

        res.send('ok');
    } catch (err) {
        res.send(err.message);
    }

});

app.get('/users', async (req, res) => {
    const users = await knex.select().table('users');

    res.send(users);
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