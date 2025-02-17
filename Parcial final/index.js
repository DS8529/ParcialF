import express from 'express';
import { pqrRouter } from './routes/pqrs.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Rutas
app.use('/', pqrRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
