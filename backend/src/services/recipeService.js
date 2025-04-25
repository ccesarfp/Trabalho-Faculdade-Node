import { db } from '../config/database.js'

export const saveRecipe = async (recipe, operation = 'insert') => {
    return new Promise((resolve, reject) => {
        let query = '';
        let values = [];

        if (operation === 'insert') {
            const fields = Object.keys(recipe).join(', ');
            const placeholders = Object.keys(recipe).map(() => '?').join(', ');
            query = `INSERT INTO recipes(${fields}) VALUES(${placeholders})`;
            values = Object.values(recipe);
        }

        if (operation === 'update') {
            const setFields = Object.keys(recipe).filter(key => key !== 'public_id')
                .map(key => `${key} = ?`).join(', ');
            query = `UPDATE recipes SET ${setFields} WHERE public_id = ?`;
            values = [
                ...Object.keys(recipe).filter(k => k !== 'public_id').map(k => recipe[k]),
                recipe.public_id
            ];
        }

        db.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export const deleteRecipe = async (publicId) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM recipes WHERE public_id = ?`;


        db.query(query, [publicId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}