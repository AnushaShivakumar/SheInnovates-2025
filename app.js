const express = require('express')
const path = require('path');
const app = express()
const port = 500

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (err) => {
    console.log('Server has started on: http://localhost:' + port);
})

app.get('/', (req, res) => {
    console.log(req.method);
    res.render('index.html')
    res.end()
})