const documentary = require('../model/documentary');
const movie = require('../model/movie');
const musicVideo = require('../model/musicVIdeo');
const news = require('../model/news');
const talkShow = require('../model/talkSHow');
const tvSeries = require('../model/tvSeries');

class Handler {
    constructor(connector) {
        this.connector = connector;
        this.responseHandler = {
            1: async () => {await documentary.getAll(this.connector)},
            2: async () => {await movie.getAll(this.connector)},
            3: async () => {await tvSeries.getAll(this.connector)},
            4: async () => {await news.getAll(this.connector)},
            5: async () => {await talkShow.getAll(this.connector)},
        }
    }


}
module.exports = Handler;