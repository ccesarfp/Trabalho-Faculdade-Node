import { db } from '../config/database.js'

export const getUserByPublicId = (publicId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT id ' +
            'FROM users ' +
            'WHERE public_id = ?';

        db.query(query, [publicId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export const getAllUsers = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT public_id as id, name, email, status ' +
            'FROM users';

        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export const saveUser = async (user, operation = 'insert') => {
    return new Promise((resolve, reject) => {
        let query = '';
        let values = [];

        if (operation === 'insert') {
            const fields = Object.keys(user).join(', ');
            const placeholders = Object.keys(user).map(() => '?').join(', ');
            query = `INSERT INTO users(${fields}) VALUES(${placeholders})`;
            values = Object.values(user);
        }

        if (operation === 'update') {
            const setFields = Object.keys(user).filter(key => key !== 'public_id')
                .map(key => `${key} = ?`).join(', ');
            query = `UPDATE users SET ${setFields} WHERE public_id = ?`;
            values = [
                ...Object.keys(user).filter(k => k !== 'public_id').map(k => user[k]),
                user.public_id
            ];
        }

        if (operation === 'delete') {
            query = `UPDATE users SET status = ? WHERE public_id = ?`;
            values = ['inactive', user.public_id];
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