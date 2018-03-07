const express = require("express")
const hbs = require("hbs")
const Hike = require("./models/Hike")
const parser = require("body-parser")
const hikeController = require("./controllers/hike")
const methodOverride = require('method-override')
const app = express()
const path = require("path")

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "hbs")
app.use(parser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    Hike.find({}).then(hikes => {
        res.render("index", { hikes })
    })
})

app.get("/hike/show", (req, res) => {
    Hike.find({}).then(hikes => {
        res.render("show", { hikes })
    })
})

app.delete('/', (req, res) => {
    Hike.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/')
        })
});

app.use("/hikes", hikeController)

app.listen(4000, () => {
    console.log("listening on port 4000")
})