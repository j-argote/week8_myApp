const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/games'));

app.listen(3000, ()=>{
    console.log('running server on port 3000')
})