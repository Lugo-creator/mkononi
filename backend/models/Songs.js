const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: String,
    src: String,
    song: String,
    artist: String,
    path: String
});

const SongModel = mongoose.model("songs", SongSchema);
module.exports = SongModel;
