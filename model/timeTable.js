exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Timetable');
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};

exports.getShowsByDate = (connection, date) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from Timetable WHERE date = ' + date);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};