import express from 'express';
import 'dotenv/config';
import webRoutes from './routes/web';

const app = express();
const port = process.env.PORT;

// config middleware convert data from form to object type
app.use(express.urlencoded({ extended: true }));

// config static files
app.use(express.static('public'));

// config view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// config router
webRoutes(app);

app.listen(port, () => {
    console.log(`My app is running with port: ${port}`);
});