const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hikes')

mongoose.Promise = Promise

module.exports = mongoose
