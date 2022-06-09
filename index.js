const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    //res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    res.send('Indexi!');
});

app.get('/home', (req, res) => {
    res.send('Homie!');
})

app.listen(process.env.PORT || 3000);

module.exports = app;
