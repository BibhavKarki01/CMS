const express = require("express")
const route = express.Router()
const indexcontroller = require("../Controller/index")

route.get('/', indexcontroller.indexpage)
route.get('/dashboard', indexcontroller.admindashboard)
route.get('/about', indexcontroller.aboutpage)
route.get('/news', indexcontroller.newspage)
route.get('/contact', indexcontroller.contactpage)
route.get('/admin', indexcontroller.adminloginpage)
route.get('/viewcontact', indexcontroller.viewcontact)
route.post('/contactdata', indexcontroller.getcontactdata)
route.get("/newsportal", indexcontroller.newsportal)
route.post('/newsstore', indexcontroller.storenewsdata)
route.post('/login', indexcontroller.logindata)

module.exports = route