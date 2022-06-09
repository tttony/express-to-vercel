const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

app.get('/', (req, res) => {
    //res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    res.send('Indexi!');
});

app.get('/home', (req, res) => {
    res.send('Homie!');
});

app.get('/router', async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing Router!",
    message: "The app is working properly!",
  });
});

app.listen(process.env.PORT || 3000);

module.exports = app;
