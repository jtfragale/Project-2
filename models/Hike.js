const mongoose = require("../db/connection")

const HikeSchema = new mongoose.Schema({
    name: String,
    description: String
})

const Hike = mongoose.model("Hike", HikeSchema)

module.exports = Hike