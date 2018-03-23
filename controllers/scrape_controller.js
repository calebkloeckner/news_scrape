

// var express = require("express");
// var router = express.Router();
// var request = require("request");
// var cheerio = require("cheerio");
// var mongoose = require("mongoose");
// mongoose.Promise = Promise;

// var Note = require("../models/Note.js");
// var Article = require("../models/Headline.js");
// var app = express();

// app.get("/scrape", function (req, res) {
//     axios.get("http://www.echojs.com/").then(function (response) {
//         var $ = cheerio.load(response.data);
//         $("article h2").each(function (i, element) {
//             var result = {};
//             result.title = $(this)
//                 .children("a")
//                 .text();
//             result.link = $(this)
//                 .children("a")
//                 .text("href");
//             db.Article.create(result)
//                 .then(function (dbArticle) {
//                     console.log(dbArticle);
//                 })
//                 .catch(function (err) {
//                     return res.json(err);
//                 });
//         });
//         res.send("Scrape complete");
//     });
// });


// app.get("/headlines", (req, res) => {
//     Article.find({}, (error, doc) => {
//         if(error){
//             console.log(error);
//         } else {
//             var hbsArticleObject = {
//                 articles: doc
//             };
//             res.render("headlines", hbsArticleObject);
//         }
//     });
// });


// app.get("/", (req, res) => {
//     res.send("This sucks");
// });

// app.get("/articles", function (req, res) {
//     db.Article.find({})
//         .then(function (dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function (err) {
//             res.json(err);
//         });
// });

// app.get("/articles/:id", function (req, res) {
//     db.Article.findOne({
//             _id: req.params.id
//         })
//         .populate("note")
//         .then(function (dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function (err) {
//             res.json(dbArticle);
//             return db.Article.findOneAndUpdate({
//                 _id: req.params.id
//             }, {
//                 note: dbNote._id
//             }, {
//                 new: true
//             });
//         })
//         .then(function (dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function (err) {
//             res.json(err);
//         });
// });

// module.exports = router;