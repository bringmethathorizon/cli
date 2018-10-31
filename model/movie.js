exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Movie');
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};

exports.getById = (connection, id) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Movie WHERE id =' + id);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};

exports.getByGenre= (connection, id) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Movie WHERE genre =' + id);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};