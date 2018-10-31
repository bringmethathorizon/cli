const messages = require('../const/messages');
const handler = require('./handler');
const readline = require('readline');

class MyTvStationCLI {
    constructor(connection) {
        this.connection = connection;
        this.rl = null;
        this.quest1 = null;
    }

    init() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.quest1 = () => {
            this.rl.question(messages.greeting, async (answer) => {
                answer = parseInt(answer);
                if (!Number.isInteger(answer) || answer < 0 || answer > 5) {
                    console.log("Wrong input");
                    exports.quest1();
                }
                let res = await handler.responseHandler[answer](this.connection);
                console.log(res);

            });
        }
    }
}

module.exports = MyTvStationCLI;



