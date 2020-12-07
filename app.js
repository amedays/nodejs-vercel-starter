const express = require('express')
const { domain } = require('process')
const url = require('url')
const app = express()

// [{"hostname":"baidu.com","protocol":"https:"}]
let server = process.env.SERVER
let domains = Json.parse(server)

let number = domains.length
app.get('*', (req, res) => {
    var date = new Date();
    var hour = date.getHours();
    let gap = 24/number;
    let index =  Math.floor(hour / gap);
    let { path } = url.parse(req.url);
    var distination = domains[index];
    distination['pathname'] = path;
    console.log(url.format(distination));
    res.redirect(302, url.format(distination));
})
module.exports = app
