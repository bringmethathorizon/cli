const mariadb = require('mariadb');
const pool = mariadb.createPool({host: '127.0.0.1', user:'root', connectionLimit: 5});

async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        // conn.query(("SELECT * from ayana.Documentary"), function (err, result, fields) {
        //     if (err) throw err;
        //     console.log(result)
        // });
        // const res = await conn.query("INSERT INTO ayana.Producer values (1, Michael Bay)", []);
        // await conn.query("INSERT INTO Movie value (?, ?,?,?,?,?,?,?,?,?,?,?)", [1, "Ethernal Sunshine of the spotless mind", 1200, "2004", "A very nice movie yall",1,1,3,1, 2, 3, 1]);
        await conn.query("INSERT INTO ayana.Movie value (?, ?,?,?,?,?,?,?,?,?,?,?)", [4, "Kill Bill", 1200, "2003-11-11", "Emma kills Bill in the next episode",1,1,3,1, 2, 3, 1]);
        await conn.query("INSERT INTO ayana.Movie value (?, ?,?,?,?,?,?,?,?,?,?,?)", [5, "Twilight", 1200, "2003-11-11", "Gay Eddy",1,1,3,1, 2, 3, 1]);
        // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}
asyncFunction();