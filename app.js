const express = require('express')
const app = express()
const port = 500

app.set('view engine', 'pug')
app.set('views', __dirname + '/routes')
app.set('view options', { layout: false });

app.listen(port, (err) => {
    console.log('Server has started on: http://localhost:' + port);
})

app.get('/', (req, res) => {
    res.render('index.jade')
})