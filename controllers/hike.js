const express = require("express")
const router = express.Router()
const Hike = require("../models/Hike")

router.post("/", (req, res) => {
    Hike.create(req.body).then(hike => {
        res.redirect(`/hikes/${hike.id}`)
    })
})

router.get("/new", (req, res) => {
    res.render("hike/new")
})

module.exports = router