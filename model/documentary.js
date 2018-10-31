exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Documentary');
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};

exports.getById = (connection, id) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Documentary WHERE id = ' + id);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};
