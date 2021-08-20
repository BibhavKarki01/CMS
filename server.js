const express = require("express");
const mongoose = require("mongoose")
const fileUpload = require('express-fileupload')
const path = require('path');
const router = require("./Route/index")

const app = express()

app.set("view engine", "ejs")
app.set("views", "View")
app.use(express.static(path.join(__dirname, 'Public')));
app.use(fileUpload())
mongoose.connect("mongodb://localhost/CMSpractice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(app => {
    console.log("database connected")
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(3000, () => {
    console.log("server Running")
})