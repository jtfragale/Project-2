const Hike = require("../models/Hike")

Hike.remove({}).then(() => {
    Promise.all([
        Hike.create({
            name: "Marys Rock",
            description: "This is a cool hike"
        })
    ]).then(() => {
        console.log("done")
        process.exit()
    })
})
