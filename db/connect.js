const mariadb = require('mariadb');
const pool = mariadb.createPool({host: '127.0.0.1', user:'root', connectionLimit: 5});
exports.getConnection = async function() {
    return await pool.getConnection();
};