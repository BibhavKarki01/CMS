 const contactmodel = require("../Model/contact")
 const alish = require("../Model/news")
 const path = require("path")
 const fs = require('fs')

 const darshan = require("../Model/login")
 exports.indexpage = (req, res, next) => {
     alish.find({})
         .then(newsdata => {
             res.render("default/index.ejs", {
                 newsdata
             })
         })

 }
 exports.admindashboard = (req, res, next) => {
     res.render("admin/dashboard.ejs")
 }

 exports.aboutpage = (req, res, next) => {
     res.render("default/about.ejs")
 }

 exports.newspage = (req, res, next) => {
     alish.find({})
         .then(newsdata => {
             res.render("default/news.ejs", {
                 newsdata
             })

         })
 }
 exports.contactpage = (req, res, next) => {
     res.render("default/contact.ejs")
 }
 exports.adminloginpage = (req, res, next) => {
     res.render("admin/login.ejs")
 }

 exports.viewcontact = (req, res, next) => {
     contactmodel.find({})
         .then(contactdata => {
             res.render("admin/viewcontact.ejs", {
                 contactdata
             })
         })
 }

 exports.getcontactdata = (req, res, next) => {

     contactmodel.create({
         ...req.body
     }).then(bb => {
         console.log("database created")
     }).catch(err => {
         console.log("database is not created")
     })
     res.redirect("/")
 }
 exports.newsportal = (req, res, next) => {
     alish.find({})
         .then(newsdatas => {
             res.render("admin/newsportal.ejs", {
                 newsdatas
             })

         })
 }
 exports.storenewsdata = (req, res, next) => {
     //  alish.create({
     //      ...req.body
     //  }).then(aa => {
     //      console.log("news create")
     //  })

     //  res.render("admin/newsportal.ejs")
     console.log(req)
     const { image } = req.files
     const uploadpath = path.resolve(__dirname, '..', 'Public/image/news', image.name)
     image.mv(uploadpath, (error) => {
         alish.create({
             ...req.body,
             image: `/news/${image.name}`,
         }).then(news => {
             alish.find({})
                 .then(newsdatas => {
                     res.render("admin/newsportal.ejs", {
                         newsdatas

                     })
                 })

         }).catch(err => {
             console.log(err)
         })
     })
 }
 exports.logindata = (req, res, next) => {
     darshan.create({
         ...req.body
     }).then(bb => {
         console.log("news created")
     }).catch(err => {
         console.log("news is not created")
     })
     res.redirect("/admin")
 }