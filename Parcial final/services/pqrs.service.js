import { sequelize } from '../models';

export async function addPQR({ title, description, category, email, name }) {
    try {
        const pqr = await sequelize.models.pqr.create({
            title,
            description,
            category,
            email,
            name
        });
        return pqr;
    } catch (error) {
        return { error: 'Error al agregar la PQR.' };
    }
}