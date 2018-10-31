let mysql = require("mysql");

let pool = mysql.createPool({
    connectionLimit : 100,
    host     : '192.168.55.153',
    port     :  22,
    user     : 'ayana',
    password : 'mysql',
    database : 'ayana',
});
exports.getConnection = async function() {
    return await pool.getConnection();
};