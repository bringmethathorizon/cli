exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from News');
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};

exports.getById = (connection, id) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from News WHERE id = ' + id);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};