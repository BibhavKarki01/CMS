const mongoose = require("mongoose")
const manzil = mongoose.Schema;
const arjun = new manzil({
    loginemail: {
        type: String
    },
    loginpassword: {
        type: String
    }
})
module.exports = mongoose.model("login", arjun)