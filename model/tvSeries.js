exports.getAll = (connection) => {
    return new Promise (async (resolve, reject)=> {
        try {
            let rows = await connection.query('SELECT title, duration, name as Cast, country_name as Country, producer_name as Producer, lang_name as Language from ayana.TVSeries d\n' +
            '            left join ayana.Country c on d.country_id=c.id\n' +
            '                left join ayana.Director dr on d.director_id=dr.id\n' +
            '                    left join ayana.Producer p on d.producer_id=p.id\n' +
            '                        left join ayana.Language l on d.lang_id=l.id' +
                '                       left join ayana.Cast ct on d.cast_id=ct.id;');
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
            let rows = await connection.query('SELECT * from Documentary WHERE = ' + id);
            resolve(rows);
        } catch (err) {
            reject(err);
        }
    })
};