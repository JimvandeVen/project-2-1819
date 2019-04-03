"use strict";

const express = require("express");
const compression = require("compression");
const fs = require("fs")
const brotli = require('brotli');
const shrinkRay = require('shrink-ray-current')

const app = express();

app.set("views", "view");
app.set("view engine", "ejs");
// app.use(compression());
// app.use(shrinkRay({
//     cache: () => false, cacheSize: false, filter: () => true, brotli: {
//         quality: 4 // between 1 and 11
//     }, zlib: {
//         level: 6 // between 1 and 9
//     }
// }));
app.use(shrinkRay());

app.use(express.static('public'))

app.get("/", index)

app.listen(8808);
// app.listen(process.env.PORT || 3000)
console.log("Server is Listening on port 8808");

function index(req, res) {
    res.render("index")
}

// function revUrl(url) {
//   let fileName = JSON.parse(fs.readFileSync("public/rev-manifest.json", 'utf8'))
//   return fileName[url]
// }