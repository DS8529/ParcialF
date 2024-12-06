import express from 'express';
import { addPQR } from '../services/pqrs.service.js';

export const pqrRouter = express.Router();

pqrRouter.get('/', (req, res) => {
    res.render('pqr-form'); 
});

pqrRouter.post('/', (req, res) => {
    const { title, description, category, email, name } = req.body;

    if (!title || !description || !category || !email || !name) {
        return res.status(400).send('Complete todos los datos.');
    }

    const result = addPQR({ title, description, category, email, name });
    if (result.error) {
        return res.status(500).send('Error al guardar la PQR.');
    }

    res.send('PQR enviado satisfactoriamente.');
});