const mongoose = require("mongoose")
const darshan = mongoose.Schema;
const manzil = new darshan({
    image: {
        type: String
    },
    title: {
        type: String
    },
    details: {
        type: String
    }
})
module.exports = mongoose.model("news", manzil)