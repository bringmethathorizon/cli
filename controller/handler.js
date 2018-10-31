const documentary = require('../model/documentary');
const movie = require('../model/movie');
const musicVideo = require('../model/musicVIdeo');
const news = require('../model/news');
const talkShow = require('../model/talkSHow');
const tvSeries = require('../model/tvSeries');

exports.responseHandler = {
    1: () => {documentary.getAll()},
    2: () => {movie.getAll()},
    3: () => {musicVideo.getAll()},
    4: () => {news.getAll()},
    5: () => {talkShow.getAll()},
    6: () => {tvSeries.getAll()},
};