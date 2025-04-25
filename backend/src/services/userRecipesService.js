import { db } from '../config/database.js'

export const getAllRecipes = async (userId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT recipes.public_id as id, recipes.name, recipes.description, recipes.complexity ' +
            'FROM users ' +
            'LEFT JOIN recipes ON recipes.user_id = users.id ' +
            'WHERE users.public_id = ?';

        db.query(query, [userId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};