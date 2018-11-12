exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT lang_name as Language, country_id as Country from ayana.News n ' +
                'left join ayana.Language l on n.lang_id=l.id' +
                '   left join ayana.Country c on n.country_id=c.id;');
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