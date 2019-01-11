const express = require('express');
const app = express();
const dataFile = require('./data/data.json');


app.set('appData', dataFile)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/games'));
app.use(require('./routes/feedback'));

app.listen(3000, ()=>{
    console.log('running server on port 3000')
})