const mongoose = require("mongoose")
const darshan = mongoose.Schema;
const shela = new darshan({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: String
    },
    message: {
        type: String
    }
})
module.exports = mongoose.model("contact", shela)