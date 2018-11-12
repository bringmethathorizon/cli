const messages = require('../const/messages');
const Handler = require('./handler');
const readline = require('readline');

class MyTvStationCLI {
    constructor(connection) {
        this.connection = connection;
        this.rl = null;
        this.quest1 = null;
    }

    init() {
        let myHandler = new Handler(this.connection);
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.quest1 = async () => {
            this.rl.question(messages.greeting, async (answer) => {
                answer = parseInt(answer);
                if (!Number.isInteger(answer) || answer < 0 || answer > 5) {
                    console.log("Wrong input");
                    this.quest1();
                }
                let res = await myHandler.responseHandler[answer](this.connection);
                this.quest1();
            });
        };
        this.quest1();
    }
}

module.exports = MyTvStationCLI;



