const express = require("express")
const hbs = require("hbs")
const Hike = require("./models/Hike")
const parser = require("body-parser")
const hikeController = require("./controllers/hike")
const app = express()

app.set("view engine", "hbs")
app.use(parser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    Hike.find({}).then(hikes => {
        res.render("index", { hikes })
    })
})

app.use("/hikes", hikeController)

app.listen(4000, () => {
    console.log("listening on port 4000")
})