process.env.SERVER = '[{"hostname":"tako-rss.herokuapp.com","protocol":"https:"},{"hostname":"rss-tako.herokuapp.com","protocol":"https:"}]'
var app = require('./app');
app.listen(3000)
module.exports = app