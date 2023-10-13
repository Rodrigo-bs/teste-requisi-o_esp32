const { json } = require('body-parser');
const express = require('express');

const app = express();

app.use(json())

app.get('/teste', (res, req)  => {
    console.log('Requisição executada com sucesso.');
    console.log(res.query.id);

    return req.status(200).json({ ok: 'ok' });
});

app.listen(5000, () => {
    console.log('is Running')
});