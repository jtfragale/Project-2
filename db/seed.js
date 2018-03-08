const Hike = require("../models/Hike")

Hike.remove({}).then(() => {
    Promise.all([
        Hike.create({
            name: "Mary's Rock",
            description: "Marys Rock via Appalachian Trail (North Approach) is a 3.4 mile moderately trafficked out and back trail located near Sperryville, Virginia that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash(alltrails)."
        }),
        Hike.create({
            name: "Overall Run Falls",
            description: "Overall Run Trail is a 7.3 mile lightly trafficked loop trail located near Bentonville, Virginia that features the tallest waterfall in the park and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash(alltrails)"
        }),
        Hike.create({
            name: "Little Devils Stairs",
            description: "Little Devils Stairs Trail is a 5.3 mile lightly trafficked out and back trail located near Washington, Virginia that features a waterfall and is rated as difficult. The trail is primarily used for hiking, walking, trail running, and nature trips and is best used from April until November. Dogs are also able to use this trail but must be kept on leash(alltrails)."
        }),
        Hike.create({
            name: "White Oak Canyon",
            description: "White Oak Canyon Trail is a 10 mile moderately trafficked out and back trail located near Syria, Virginia that features a waterfall and is rated as difficult. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash(alltrails)."
        })
    ]).then(() => {
        console.log("done")
        process.exit()
    })
})
