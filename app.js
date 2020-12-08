const express = require('express')
const url = require('url')
const app = express()

let server = process.env.SERVER || '[{"hostname":"baidu.com","protocol":"https:"},{"hostname":"google.com","protocol":"https:"}]';
let domains = JSON.parse(server)
let number = domains.length
app.get('*', (req, res) => {
    var date = new Date();
    var hour = date.getHours();
    let gap = 24 / number;
    let index = Math.floor(hour / gap);
    let { path } = url.parse(req.url);
    var distination = domains[index];
    distination['pathname'] = path;
    console.debug('redirect to: ' + url.format(distination));
    // res.redirect(302, url.format(distination));
    res.writeHead(302, {'Location': url.format(distination)});
    res.end();
})
module.exports = app