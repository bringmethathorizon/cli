exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT * from ayana.Timetable');
            let result = JSON.stringify(rows);
            result = JSON.parse(result);
            for(let i = 0; i < result.length; i++) {
                for (let key in result[i]) {
                    if (result[i].hasOwnProperty(key)) {
                        console.log(key + " -> " + result[i][key]);
                    }
                }
                // console.log(result[i])
            }
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