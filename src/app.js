const express = require('express');

const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/usuarios', userRoutes);

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Connect funcionando com Nodemon!'
    });
});

module.exports = app;