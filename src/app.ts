import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/shop', (req, res) => {
    res.send('Shop Page');
});

app.listen(port, () => {
    console.log(`My app is running with port: ${port}`);
});