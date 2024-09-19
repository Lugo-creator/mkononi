const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: String,
    src: String,
    text: String,
    label: String,
    path: String
});

const ArtistModel = mongoose.model("artists", ArtistSchema);
module.exports = ArtistModel;
