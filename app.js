const db = require('./db/connect');
const cli = require('./controller/initCli');

const main = async () => {
    let connection;
    try {
        connection = await db.getConnection();

    }catch (e) {
        console.error('Error connecting to DB: ' + e);
        console.error('')
    }
    const CLI = new cli(connection);
    CLI.init();
};

main()
    .catch(e=>console.log(e));
