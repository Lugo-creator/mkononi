const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    owner: String,
    mobile: { type: String, unique: true },
    business: String,
    description: String
});

const Business = mongoose.models.Business || mongoose.model('Business', businessSchema);

module.exports = Business;
