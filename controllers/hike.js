const express = require("express")
const router = express.Router()
const Hike = require("../models/Hike")

router.post("/", (req, res) => {
    Hike.create(req.body).then(hike => {
        res.redirect(`/hikes`)
    })
})

router.get("/", (req, res) => {
    Hike.find({})
        .then(hikes => {
            res.render("hike/list", { hikes })
        })
})

router.get("/new", (req, res) => {
    res.render("hike/new")
})

router.delete("/:id", (req, res) => {
    Hike.findOneAndRemove({ _id: req.params.id }).then(() => {
        res.redirect("/hikes");
    });
});

router.get('/edit/:id', (req, res) => {
    Hike.findOne({ _id: req.params.id })
        .then(hikes => {
            res.render("hike/edit", hikes)
        })
})

router.put('/:id', (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    Hike.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(hikes => {
            // console.log(hikes)
            res.redirect('/hikes')
        })
})

module.exports = router